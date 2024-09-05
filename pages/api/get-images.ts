import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

const ITEMS_PER_PAGE = 20;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder, page = '1' } = req.query;
  
  if (typeof folder !== 'string') {
    return res.status(400).json({ error: 'Folder parameter is required' });
  }

  const pageNumber = parseInt(page as string, 10);
  const directory = path.join(process.cwd(), 'public', 'assets', folder);
  
  try {
    const files = await fs.readdir(directory);
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif)$/i.test(file));
    
    const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedFiles = imageFiles.slice(startIndex, endIndex);
    
    const items = paginatedFiles.map(fileName => ({
      src: `/assets/${folder}/${fileName}`,
      alt: fileName,
      title: fileName.replace(/\.[^/.]+$/, "").replace(/_/g, ' ')
    }));

    res.status(200).json({
      items,
      totalPages: Math.ceil(imageFiles.length / ITEMS_PER_PAGE),
      currentPage: pageNumber
    });
  } catch (error) {
    res.status(500).json({ error: 'Unable to read directory' });
  }
}

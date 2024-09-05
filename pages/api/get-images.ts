import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs/promises';
import path from 'path';

const ITEMS_PER_PAGE = 20;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder, page = '1' } = req.query;
  
  if (typeof folder !== 'string') {
    return res.status(400).json({ error: 'Требуется параметр folder' });
  }

  const pageNumber = parseInt(page as string, 10);
  const directory = path.join(process.cwd(), 'public', 'assets', folder);
  
  try {
    const files = await fs.readdir(directory, { withFileTypes: true });
    const imageFiles = files
      .filter(dirent => dirent.isFile() && /\.(jpg|jpeg|png|gif)$/i.test(dirent.name))
      .map(dirent => dirent.name);

    const totalItems = imageFiles.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
    const startIndex = (pageNumber - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const items = imageFiles.slice(startIndex, endIndex).map(fileName => ({
      src: `/assets/${folder}/${fileName}`,
      alt: fileName,
      title: fileName.replace(/\.[^/.]+$/, "").replace(/_/g, ' ')
    }));

    res.status(200).json({
      items,
      totalPages,
      currentPage: pageNumber
    });
  } catch (error) {
    console.error('Ошибка чтения директории:', error);
    res.status(500).json({ error: 'Не удалось прочитать директорию' });
  }
}

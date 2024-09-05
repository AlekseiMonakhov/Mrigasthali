import { NextApiRequest, NextApiResponse } from 'next';
import { promises as fs } from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder } = req.query;
  
  if (typeof folder !== 'string') {
    return res.status(400).json({ error: 'Folder parameter is required' });
  }

  const directory = path.join(process.cwd(), 'public', 'assets', folder);
  
  try {
    const fileNames = await fs.readdir(directory);
    
    const items = fileNames.filter(fileName => /\.(jpg|jpeg|png|gif)$/i.test(fileName)).map((fileName, index) => ({
      src: `/assets/${folder}/${fileName}`,
      alt: `Image ${index + 1}`,
      title: fileName.replace('.png', '').replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())
    }));

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Unable to read directory' });
  }
}

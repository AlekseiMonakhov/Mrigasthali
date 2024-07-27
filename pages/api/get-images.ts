import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder } = req.query;
  
  if (typeof folder !== 'string') {
    return res.status(400).json({ error: 'Folder parameter is required' });
  }

  const directory = path.join(process.cwd(), 'public', 'assets', folder);
  
  try {
    const fileNames = fs.readdirSync(directory);
    
    const items = fileNames.map((fileName, index) => ({
      src: `/assets/${folder}/${fileName}`,
      alt: `Image ${index + 1}`,
      title: 'Yatra 2024'
    }));

    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ error: 'Unable to read directory' });
  }
}

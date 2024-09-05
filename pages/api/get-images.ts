import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const MAX_FILES = 100; // Ограничение количества файлов

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { folder } = req.query;
  
  if (typeof folder !== 'string') {
    return res.status(400).json({ error: 'Folder parameter is required' });
  }

  const directory = path.join(process.cwd(), 'public', 'assets', folder);
  
  res.writeHead(200, {
    'Content-Type': 'application/json',
    'Transfer-Encoding': 'chunked',
  });

  let count = 0;
  res.write('[');

  try {
    const stream = fs.createReadStream(directory, { encoding: 'utf8', highWaterMark: 64 * 1024 });

    for await (const chunk of stream) {
      const fileNames = chunk.split('\n').filter(Boolean);
      
      for (const fileName of fileNames) {
        if (/\.(jpg|jpeg|png|gif)$/i.test(fileName)) {
          const item = {
            src: `/assets/${folder}/${fileName}`,
            alt: `Image ${count + 1}`,
            title: fileName.replace('.png', '').replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())
          };
          
          if (count > 0) res.write(',');
          res.write(JSON.stringify(item));
          
          count++;
          if (count >= MAX_FILES) break;
        }
      }
      
      if (count >= MAX_FILES) break;
    }

    res.write(']');
    res.end();
  } catch (error) {
    res.write(']}');
    res.end();
  }
}

import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
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
    const imageFiles: string[] = [];
    let currentPage = 1;
    let filesProcessed = 0;

    const processFiles = () => {
      return new Promise<void>((resolve, reject) => {
        const stream = fs.readdirSync(directory, { withFileTypes: true });
        
        for (const dirent of stream) {
          if (dirent.isFile() && /\.(jpg|jpeg|png|gif)$/i.test(dirent.name)) {
            filesProcessed++;
            
            if (currentPage === pageNumber) {
              imageFiles.push(dirent.name);
              
              if (imageFiles.length === ITEMS_PER_PAGE) {
                break;
              }
            }
            
            if (filesProcessed % ITEMS_PER_PAGE === 0) {
              currentPage++;
            }
          }
        }
        
        resolve();
      });
    };

    await processFiles();
    
    const items = imageFiles.map(fileName => ({
      src: `/assets/${folder}/${fileName}`,
      alt: fileName,
      title: fileName.replace(/\.[^/.]+$/, "").replace(/_/g, ' ')
    }));

    res.status(200).json({
      items,
      totalPages: Math.ceil(filesProcessed / ITEMS_PER_PAGE),
      currentPage: pageNumber
    });
  } catch (error) {
    console.error('Error reading directory:', error);
    res.status(500).json({ error: 'Unable to read directory' });
  }
}

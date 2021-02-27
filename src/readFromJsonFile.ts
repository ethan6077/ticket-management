import fs from 'fs';
import path from 'path';

const root = path.dirname(require.main.filename)
const assetsPath = path.join(root, '../assets')

export type FileName = 'organizations' | 'users' | 'tickets'

async function readFromJsonFile(fileName : FileName) {
  const jsonFilePath = path.join(assetsPath, fileName + '.json')

  return new Promise((resolve, reject) => {
    fs.readFile(jsonFilePath, 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      }
      const parsedData = JSON.parse(data)
      resolve(parsedData)
    });
  });
}

export default readFromJsonFile;

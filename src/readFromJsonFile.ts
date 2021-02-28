import fs from 'fs';
import path from 'path';
import { FileName } from './types'

const root = path.dirname(require.main.filename)
const assetsPath = path.join(root, '../assets')

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

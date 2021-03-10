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
      let parsedData
      try {
        parsedData = JSON.parse(data)
      } catch (jsonParseError) {
        reject(jsonParseError)
      }
      resolve(parsedData)
    });
  });
}

export default readFromJsonFile;

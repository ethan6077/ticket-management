import readFromJsonFile, { FileName } from './readFromJsonFile'

async function performSearch(target: FileName, key: any, value: any) {
  const data = await readFromJsonFile(target)
  if (!data || !Array.isArray(data)) {
    return;
  }

  return data.find(d => {
    if (typeof d[key] === 'number') {
      return d[key].toString() === value
    }
    return d[key] === value
  })
}

export default performSearch

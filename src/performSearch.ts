import readFromJsonFile from './readFromJsonFile'
import { SearchConfigFilled } from './types'

async function performSearch(conf: SearchConfigFilled) {
  const data = await readFromJsonFile(conf.searchTarget)
  if (!data || !Array.isArray(data)) {
    return;
  }

  return data.filter(d => {
    if (typeof d[conf.searchTerm] === 'number' || typeof d[conf.searchTerm] === 'boolean') {
      return d[conf.searchTerm].toString() === conf.searchValue
    }
    if (Array.isArray(d[conf.searchTerm])) {
      return d[conf.searchTerm].includes(conf.searchValue);
    }
    return d[conf.searchTerm] === conf.searchValue
  })
}

export default performSearch

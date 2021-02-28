import readFromJsonFile from './readFromJsonFile'
import { SearchConfigFilled } from './types'

async function performSearch(conf: SearchConfigFilled) {
  const data = await readFromJsonFile(conf.searchTarget)
  if (!data || !Array.isArray(data)) {
    return;
  }

  return data.find(d => {
    if (typeof d[conf.searchTerm] === 'number') {
      return d[conf.searchTerm].toString() === conf.searchValue
    }
    return d[conf.searchTerm] === conf.searchValue
  })
}

export default performSearch


import { SearchConfigFilled } from './types'

async function performSearch(conf: SearchConfigFilled, data: any[]) {
  return data.filter(d => {
    if (typeof d[conf.searchTerm] === 'number' || typeof d[conf.searchTerm] === 'boolean') {
      return d[conf.searchTerm].toString() === conf.searchValue
    }
    if (Array.isArray(d[conf.searchTerm])) {
      return d[conf.searchTerm].includes(conf.searchValue);
    }
    if (typeof d[conf.searchTerm] === 'string') {
      return d[conf.searchTerm].toLocaleLowerCase() === conf.searchValue.toLocaleLowerCase()
    }
    return d[conf.searchTerm] === conf.searchValue
  })
}

export default performSearch

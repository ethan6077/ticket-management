
import { keys, values } from 'lodash'
import selectSearchOption from './selectSearchOption';
import performSearch from './performSearch'
import { SearchConfigFilled } from './types'

async function main() {
  const searchConfig = await selectSearchOption();

  console.log('searchConfig: ', searchConfig);

  if (keys(searchConfig).length === 0) {
    console.error('Invalid search config!');
    return;
  }

  if (values(searchConfig).some(v => v === 'quite')) {
    console.log('See you later!');
    return;
  }

  if (searchConfig.searchOption === 'search' && searchConfig.searchTarget && searchConfig.searchTerm && searchConfig.searchValue) {
    const searchResult = await performSearch(searchConfig as SearchConfigFilled)

    console.log('Result:\n', JSON.stringify(searchResult, null, '  '));
    console.log('\n');
  }
}

export default main;

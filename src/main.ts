
import { keys, values } from 'lodash'
import selectSearchOption from './selectSearchOption';
import performSearch from './performSearch'
import listSearchableFields from './listSearchableFields'
import { SearchConfigFilled } from './types'

async function main() {
  const searchConfig = await selectSearchOption();

  console.log('searchConfig: ', searchConfig);

  if (keys(searchConfig).length === 0) {
    console.error('Invalid search config!');
    return;
  }

  if (values(searchConfig).some(v => v === 'quit')) {
    console.log('See you later!');
    process.exit();
  }

  if (searchConfig.searchOption === 'search' && searchConfig.searchTarget && searchConfig.searchTerm && searchConfig.searchValue) {
    const searchResult = await performSearch(searchConfig as SearchConfigFilled)

    console.log('Result:\n', JSON.stringify(searchResult, null, '  '));
    console.log('\n');
  }

  if (searchConfig.searchOption === 'view') {
    const viewResult = await listSearchableFields()

    console.log('Result:\n', JSON.stringify(viewResult, null, '  '));
    console.log('\n');
  }
}

export default main;

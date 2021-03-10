
import { keys, values } from 'lodash'
import selectSearchOption from './selectSearchOption';
import readFromJsonFile from './readFromJsonFile'
import performSearch from './performSearch'
import listSearchableFields from './listSearchableFields'
import { SearchConfigFilled, FileName } from './types'

async function main() {
  const searchConfig = await selectSearchOption();

  // We can turn this on when debugging, it shows search config values
  // console.log('searchConfig: ', searchConfig);

  if (keys(searchConfig).length === 0) {
    console.error('Invalid search config!');
    return;
  }

  if (values(searchConfig).some(v => v === 'quit')) {
    console.log('See you later!');
    process.exit();
  }

  if (searchConfig.searchOption === 'search' && searchConfig.searchTarget && searchConfig.searchTerm && searchConfig.searchValue) {
    let data
    try {
      data = await readFromJsonFile(searchConfig.searchTarget as FileName)
    } catch (error) {
      console.log("Sorry, Invalid Json file!")
      return;
    }

    if (!data || !Array.isArray(data)) {
      return;
    }

    const searchResult = await performSearch(searchConfig as SearchConfigFilled, data)
    const searchResultDisplay = searchResult.length > 0 ? JSON.stringify(searchResult, null, '  ') : 'No results found';

    console.log('Result:\n', searchResultDisplay);
    console.log('\n');
  }

  if (searchConfig.searchOption === 'view') {
    const viewResult = await listSearchableFields()

    console.log('Result:\n', JSON.stringify(viewResult, null, '  '));
    console.log('\n');
  }
}

export default main;

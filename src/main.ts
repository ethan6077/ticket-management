import selectSearchOption from './selectSearchOption';
import performSearch from './performSearch'
import { FileName } from './readFromJsonFile'

async function main() {
  const searchParams = await selectSearchOption();

  if (searchParams.length === 0) {
    console.error('Invalid search params!');
  }

  if (searchParams[0] === 'search') {
    const searchResult = await performSearch(searchParams[1] as FileName, searchParams[2], searchParams[3])

    console.log('Result: ', searchResult);
  }
}

export default main;

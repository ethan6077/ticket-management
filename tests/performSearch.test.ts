import { expect } from 'chai'
import { fake } from 'sinon'
import performSearch from '../src/performSearch'
import { SearchConfigFilled } from '../src/types'

describe('performSearch', () => {
  it('should search and find the result fromm target file - match the case', async () => {
    const fake_data = [{ _id: 1, name: 'Ethan'}, { _id: 2, name: 'Jimmy'}];

    const fake_searchConfig: SearchConfigFilled = {
      searchOption: 'search',
      searchTarget: 'users',
      searchTerm: 'name',
      searchValue: 'Ethan'
    }

    const searchResult = await performSearch(fake_searchConfig, fake_data)

    expect(searchResult).include(fake_data[0]);

  });

  it('should search and find the result fromm target file - Not match the case', async () => {
    const fake_data = [{ _id: 1, name: 'Ethan'}, { _id: 2, name: 'Jimmy'}];

    const fake_searchConfig: SearchConfigFilled = {
      searchOption: 'search',
      searchTarget: 'users',
      searchTerm: 'name',
      searchValue: 'ethan'
    }

    const searchResult = await performSearch(fake_searchConfig, fake_data)

    expect(searchResult).include(fake_data[0]);

  }); 

  it('should search and find the result fromm target file - Failed to find the result', async () => {
    const fake_data = [{ _id: 1, name: 'Ethan'}, { _id: 2, name: 'Jimmy'}];

    const fake_searchConfig: SearchConfigFilled = {
      searchOption: 'search',
      searchTarget: 'users',
      searchTerm: 'name',
      searchValue: 'Alex'
    }

    const searchResult = await performSearch(fake_searchConfig, fake_data)

    expect(searchResult.length).eq(0);
  }); 
});
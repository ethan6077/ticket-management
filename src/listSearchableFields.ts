import { first, keys } from 'lodash';
import readFromJsonFile from './readFromJsonFile'
import { FileName, SearchableFieldsObjectList } from './types';

async function listSearchableFields(): Promise<SearchableFieldsObjectList> {
  const fileList: FileName[] = ['organizations', 'users', 'tickets'];

  return Promise.all(fileList.map(async (f) => {
    const data = await readFromJsonFile(f);

    if (!data || !Array.isArray(data)) {
      return {
        target: f,
        fields: []
      };
    }

    return {
      target: f,
      fields: keys(first(data))
    }
  }))
}

export default listSearchableFields

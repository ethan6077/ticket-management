export type FileName = 'organizations' | 'users' | 'tickets';

export interface SearchConfig {
  searchOption?: 'search' | 'view' | 'quit'
  searchTarget?: FileName | 'quit'
  searchTerm?: string
  searchValue?: string
}

export interface SearchConfigFilled extends Required<Exclude<SearchConfig, 'searchOption' | 'searchTarget'>>  {
  searchOption: 'search'
  searchTarget: FileName
}

export interface SearchableFieldsObject {
  target: FileName
  fields: string[]
}

export type SearchableFieldsObjectList = SearchableFieldsObject[]

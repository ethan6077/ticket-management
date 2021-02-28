export type FileName = 'organizations' | 'users' | 'tickets';

export interface SearchConfig {
  searchOption?: 'search' | 'view' | 'quite'
  searchTarget?: FileName | 'quite'
  searchTerm?: string
  searchValue?: string
}

export interface SearchConfigFilled extends Required<Exclude<SearchConfig, 'searchOption' | 'searchTarget'>>  {
  searchOption: 'search'
  searchTarget: FileName
}

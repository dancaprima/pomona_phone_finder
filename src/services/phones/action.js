import { FILTER_BY_BRAND, FILTER_BY_YEAR, SEARCH } from './type';

export const filteredByBrand = (id, checked) => {
  return {
    type: FILTER_BY_BRAND,
    id,
    checked
  };
};

export const filterdByYear = (id, checked) => {
  return {
    type: FILTER_BY_YEAR,
    id,
    checked
  };
};

export const searchByQuery = query => {
  return {
    type: SEARCH,
    query
  };
};

import { GET_PHONES, FILTER_BY_BRAND, FILTER_BY_YEAR, SEARCH } from './type';
import { data } from './data';
import { groupBy, find, search } from '../../helpers/utility';

const initialState = {
  data: data.phones,
  year: groupBy(data.phones, 'release_year')
    .sort()
    .map(e => {
      return { name: e, checked: false };
    }),
  brand: groupBy(data.phones, 'brand')
    .sort()
    .map(e => {
      return { name: e, checked: false };
    }),
  query: ''
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_PHONES:
      return {
        ...state
      };
    case FILTER_BY_BRAND:
      const newBrand = state.brand.map((content, i) =>
        i === action.id ? { ...content, checked: action.checked } : content
      );
      return {
        ...state,
        brand: newBrand,
        data: search(data.phones, state.query).filter(
          e => find(newBrand, e.brand) && find(state.year, e.release_year)
        )
      };
    case FILTER_BY_YEAR:
      const newYear = state.year.map((content, i) =>
        i === action.id ? { ...content, checked: action.checked } : content
      );
      return {
        ...state,
        year: newYear,
        data: search(data.phones, state.query).filter(
          e => find(state.brand, e.brand) && find(newYear, e.release_year)
        )
      };
    case SEARCH:
      return {
        ...state,
        query: action.query,
        data: search(data.phones, action.query).filter(
          e => find(state.brand, e.brand) && find(state.year, e.release_year)
        )
      };

    default:
      return state;
  }
};

export const groupBy = (items, key) =>
  items.reduce((prev, curr, index) => {
    if (!prev.includes(curr[key])) return [...prev, curr[key]];
    return prev;
  }, []);

export const find = (array, value) =>
  array.some(v => v['checked'] === true)
    ? array.find(v => v['name'] === value && v['checked'] === true)
    : true;

export const search = (arr, s) => {
  var searchArr = [];

  for (let i = arr.length; i--; ) {
    if (arr[i]['name'].toLowerCase().indexOf(s.toLowerCase()) > -1)
      searchArr.push(arr[i]);
  } // <-- This can be changed to anything
  return searchArr;
};

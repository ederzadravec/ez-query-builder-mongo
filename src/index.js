import * as R from 'ramda';

export const queryBuilder = obj => {

  const getNamePath = (path, attr, value) => {
    const [field, operator] = R.split('_', attr);
    const attrPath = R.join('.', R.append(field, path));

    const newValue = R.is(Array, value) && R.all(R.is(Object), value) ? R.map(queryBuilder, value) : value

    if (R.isNil(operator) || R.isEmpty(operator)) return { [attrPath]: newValue }

    if (R.isNil(attrPath) || R.isEmpty(attrPath)) return { [`$${operator}`]: newValue }

    return { [attrPath]: { [`$${operator}`]: newValue } };
  }

  const searchPaths = (obj, path = []) => {
    const recursivePath = (acc, v) => {
      const currentPath = R.append(v, path);
      const currentData = R.path([v], obj);

      const newPaths = R.cond([
        [x => R.is(String, v) && (R.is(String, x) || R.is(Array, x) || R.is(Boolean, x)), x => [ getNamePath(path, v, x) ]],
        [R.is(Object), x => searchPaths(currentData, currentPath)],
      ])(currentData)

      return R.concat(newPaths, acc);
    }

    return R.reduce(recursivePath, [], R.keys(obj))
  }

  return R.mergeAll(searchPaths(obj))
}

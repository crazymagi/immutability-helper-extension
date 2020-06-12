import update from 'immutability-helper';
import setWith from 'lodash/setWith';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
// import { setWith, get, isEmpty } from 'lodash';

export const getUpdateObject = (sourceObject: any, pathArray: string[], value: any): any => {
  const pathExist = [...pathArray];
  const pathNew = [];
  while (pathExist.length !== 0) {
    if (!isEmpty(get(sourceObject, pathExist))) {
      break;
    } else {
      pathNew.unshift(pathExist.pop());
    }
  }
  if (pathNew.length > 0) {
    pathExist.push(pathNew.shift());
  }
  const updatePath = [...pathExist, '$set', ...pathNew];
  const targetObject = {};
  setWith(targetObject, updatePath, value, Object);
  return targetObject;
};

export const updateWithObject = (sourceObject, pathArray, value) => {
  const targetObject = getUpdateObject(sourceObject, pathArray, value);
  const newObject = update(sourceObject, targetObject);
  return newObject;
};

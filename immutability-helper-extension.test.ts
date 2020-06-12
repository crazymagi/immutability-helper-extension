import { getUpdateObject, updateWithObject } from './immutability-helper-extension';

describe('getUpdateObject', () => {
  it('should return exact object with path and value if source object is empty', () => {
    const sourceObject = {};
    const pathArray = ['a', 'b', 'c'];
    const value = 7788;
    expect(getUpdateObject(sourceObject, pathArray, value)).toStrictEqual({
      a: {
        $set: {
          b: {
            c: 7788,
          },
        },
      },
    });
  });

  it('should return add new nest object with path and value if source object has not', () => {
    const sourceObject = {
      a: {
        d: 11,
      },
    };
    const pathArray = ['a', 'b', 'c'];
    const value = 7788;
    expect(getUpdateObject(sourceObject, pathArray, value)).toStrictEqual({
      a: {
        b: {
          $set: {
            c: 7788,
          },
        },
      },
    });
  });
});

describe('updateWithObject', () => {
  it('should return exact object with path and value if source object is empty', () => {
    const sourceObject = {};
    const pathArray = ['a', 'b', 'c'];
    const value = 7788;
    expect(updateWithObject(sourceObject, pathArray, value)).toStrictEqual({
      a: {
        b: {
          c: 7788,
        },
      },
    });
  });

  it('should return add new nest object with path and value if source object has not', () => {
    const sourceObject = {
      a: {
        d: 11,
      },
    };
    const pathArray = ['a', 'b', 'c'];
    const value = 7788;
    expect(updateWithObject(sourceObject, pathArray, value)).toStrictEqual({
      a: {
        b: {
          c: 7788,
        },
        d: 11,
      },
    });
  });
});

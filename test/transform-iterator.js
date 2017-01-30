'use strict';

const assert = require('assert');
const { makeTransformIterator, toArray } = require('..');

const x = Object.freeze([1, 2, 4, 8]);
const f = (x) => x * 2;

const expectedRange = Object.freeze(x.map(f));

describe('The transform iterator', () => {
  it('should transform an array', () => {
    const transformedRange = toArray(makeTransformIterator(x, f));
    assert.deepEqual(transformedRange, expectedRange);
  });

  it('should transform a Set', () => {
    const set = new Set(x);

    const transformedRange = toArray(makeTransformIterator(set, f));
    assert.deepEqual(transformedRange, expectedRange);
  });

  it('should even work for user defined iterators as well', () => {
    const it = {
      pos: 0,
      next() {
        const tmp = {
          value: x[this.pos], 
          done:  this.pos >= x.length
        };

        ++this.pos;

        return tmp;
      }
    };

    const transformedRange = toArray(
      makeTransformIterator({ [Symbol.iterator]() { return it; } }, f)
    );
    
    assert.deepEqual(transformedRange, expectedRange);
  });
});
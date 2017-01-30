'use strict';

const TransfromIterator = function(f, it) {
  this.next = () => {
    const { value, done } = it.next();
    return { value: f(value), done };
  };
};

/**
 * Creates an iterator that enables lazy transformation of any
 * iterator-returning object
 *
 * @param {Function} f A callable that is invoked with the values of the iterator
 * @param {Iterable} it Iterator-type
 * @return {TransfromIterator} Iterator that only transforms values upon traversal
 */
const makeTransformIterator = (f, it) => new TransfromIterator(f, it);

module.exports = makeTransformIterator;
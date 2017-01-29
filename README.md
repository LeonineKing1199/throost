# Throost

Throost is a Node.js port of the iterator adapater pattern found in
C++ libraries like Boost and Thrust. This pattern of programming can
also be seen in Rust code as well (their iterators mimic JS the most).

An iterator adapter is a simple wrapper around an iterator that alters
the behavior of it while still adhering to the iterator protocol.

Throost supports indefinite sequences as well. However, some algorithms
expect a finite iterator so calling these functions with iterators that
do not end will create indefinite loops.
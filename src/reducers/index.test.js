import reducer from './index';

it('should discard ', () => {
  const state = reducer(undefined, {});

  expect(typeof(state)).toEqual('object');
})

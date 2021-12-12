import pitchersReducer, { defaultPitchers } from './pitchers';

it('should have a default set of pitchers', () => {
  const state = pitchersReducer(undefined, {});

  expect(state).toEqual(defaultPitchers);
});

it('should add a single pitcher to an empty array', () => {
  const action = { type: 'ADD_PITCHER', payload: 'Bob Saget' }
  const state = pitchersReducer([], action);

  expect(state).toEqual(['Bob Saget']);
});

export const defaultPitchers = ['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia'];

const pitcherReducer = (state = defaultPitchers, action) => {
   if (action.type === 'ADD_PITCHER') {
      return [...state, action.payload];
   }
   return state;
}

export default pitcherReducer;

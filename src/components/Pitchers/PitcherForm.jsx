import { useDispatch } from 'react-redux';
import { useState } from 'react'


function PitcherForm() {
   const [newPitcher, setNewPitcher] = useState('');
   const dispatch = useDispatch();

   const handlePitcherNameChange = event => {
      setNewPitcher(event.target.value);
   };

   const handlePitcherSubmit = event => {
      event.preventDefault();
      dispatch({
         type: 'ADD_PITCHER',
         payload: newPitcher
      });
      setNewPitcher('');
   };
   return (
      <>
         <h3>All Pitchers</h3>
         <form onSubmit={handlePitcherSubmit}>
            <input
               type="text"
               value={newPitcher}
               onChange={handlePitcherNameChange}
               placeholder="New Pitcher Name"
            />
            <button type="submit">Add Pitcher</button>
         </form>
      </>
   )
}

export default PitcherForm;
import { useSelector} from 'react-redux';
function BehindThePlate (){
  // Grab the pitcher list from redux
  // Change to be the current catcher instead
  const currentCatcher = useSelector(store => store.currentCatcher);
  return (
    <>
      <h2>Behind The Plate: {currentCatcher}</h2>
    </>
  )
}

export default BehindThePlate;
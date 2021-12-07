import Header from '../Header/Header';
import OnTheMound from '../Pitchers/OnTheMound';
import TotalCatchers from '../Catchers/TotalCatchers';
import TotalPitchers from '../Pitchers/TotalPitchers';
import BehindThePlate from '../Catchers/BehindThePlate';
import PitchersList from '../Pitchers/PitchersList';
import CatchersList from '../Catchers/CatchersList';
import PitcherForm from '../Pitchers/PitcherForm';
import CatcherForm from '../Catchers/CatcherForm';

//no cap, this clean
function App() {
  return (
    <div>
      <Header />
      <OnTheMound />
      <BehindThePlate />
      <TotalPitchers />
      <TotalCatchers />
      <PitcherForm />
      <PitchersList />
      <CatcherForm />
      <CatchersList />
    </div>
  );
}

export default App;
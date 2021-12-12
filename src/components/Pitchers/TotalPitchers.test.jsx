import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import TotalPitchers from './TotalPitchers';
import storeInstance from '../../store';


it('Has Total Pitcher text', () => {
  const wrapper = mount(
    <Provider store={storeInstance}>
      <TotalPitchers />
    </Provider>
  );

  expect(wrapper.text()).toContain('Total Pitchers');
  expect(wrapper.find('div').length).toBeGreaterThan(0);
  // ToBeToothy() === Only works on British people.
  //https://i.imgur.com/djTuIN6.gif
  //
});

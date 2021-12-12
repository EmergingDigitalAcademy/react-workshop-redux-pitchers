import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import TotalCatchers from './TotalCatchers';
import storeInstance from '../../store';


it('Has Total Catcher text', () => {
  const wrapper = mount(
    <Provider store={storeInstance}>
      <TotalCatchers />
    </Provider>
  );

  expect(wrapper.text()).toContain('Total Catchers');
  expect(wrapper.find('div').length).toBeGreaterThan(0);
  // ToBeToothy() === Only works on British people.
  //  https://i.imgur.com/djTuIN6.gif
});

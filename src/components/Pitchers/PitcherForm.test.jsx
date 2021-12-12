import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import PitcherForm from './PitcherForm';
import storeInstance from '../../store';


it('should render an form tag', () => {
  const wrapper = mount(
    <Provider store={storeInstance}>
      <PitcherForm />
    </Provider>
  );
  expect(wrapper.find('form').length).toEqual(1);
});

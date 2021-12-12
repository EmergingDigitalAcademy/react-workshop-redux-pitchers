import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import CatcherForm from './CatcherForm'
import storeInstance from '../../store';


it('should render a form tag', () => {
  const wrapper = mount(
    <Provider store={storeInstance}>
      <CatcherForm />
    </Provider>
  );
  expect(wrapper.find('form').length).toEqual(1);
});

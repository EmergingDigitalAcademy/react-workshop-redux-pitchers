import { shallow } from 'enzyme';
import Header from "./Header";

it('should render an <h1 /> tag', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.find('h1').length).toBeGreaterThan(0);
});

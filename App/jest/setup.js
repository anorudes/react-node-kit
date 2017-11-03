import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

global.require = require;
configure({ adapter: new Adapter() });

global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};

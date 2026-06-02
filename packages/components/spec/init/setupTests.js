import '@testing-library/jest-dom';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

// // Vitest does not provide Jest's global `fail` helper, which several specs use
// // as a guard (e.g. `querySelector(...) || fail(...)`).
// globalThis.fail = (message) => {
//   throw new Error(message ?? 'fail() was called');
// };

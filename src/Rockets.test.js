import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import Rockets from './components/Rockets';

afterEach(() => {
  cleanup();
});

describe('render  component to the DOM', () => {
  test('render Rockets component', async () => {
    render(<Provider store={store}><Rockets /></Provider>);
  });
});

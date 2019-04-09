import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Display from './components/Display/Display';
import Dashboard from './components/Dashboard/Dashboard';

import { render, fireEvent } from 'react-testing-library';

describe('<App />', () => {
  it('App renders without crashing', () => {
    render(<App />);
  })

  test('<Display /> rendered without crashing', () => {
    const { getByText } = render(<App />);
    getByText(/Score Console/i);
  })

  test('<Dashboard /> rendered without crashing', () => {
    const { getByText } = render(<App />);
    getByText(/Score Dashboard/i);
  })

  // strikes increase when strikes button clicked
  describe('Dashboard Buttons', () => {
    test('strikes count is always 0, 1 or 2', () => {
      const { getByText } = render(<App />);
      getByText(/strikes: [0,1,2]/i);
    })
    test('strikes count increases when strikes button pressed', () => {
      const { getByText } = render(<App />);
      const strikesBtn = document.querySelector('.strikesBtn');
      fireEvent.click(strikesBtn);
      getByText(/strikes: 1/i)
    })
    test('strikes count increases to two when strikes button pressed twice', () => {
      const { getByText, debug } = render(<App />);
      const strikesBtn = document.querySelector('.strikesBtn');
      fireEvent.click(strikesBtn);
      fireEvent.click(strikesBtn);
      debug();
      getByText(/strikes: 1/i)
    })
  })

  // balls increase when balls are hit

  // foul increases strikes count

  // outs increase when strikes 
})
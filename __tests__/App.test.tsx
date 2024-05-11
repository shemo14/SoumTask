import React from 'react';
import 'react-native';
import App from '../App';
import {it} from '@jest/globals';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<App />);
});

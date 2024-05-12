import React from 'react';
import 'react-native';
import App from '../App.tsx';
import {it, describe, jest, beforeEach, afterEach} from '@jest/globals';
import renderer from 'react-test-renderer';
import {useAppDispatch, useAppSelector} from '../src/app/reduxHooks.ts';
import {testAppSelector} from '../src/app/testAppSelector.ts';
import {mocked} from 'jest-mock';

jest.mock('../src/app/reduxHooks.ts');

describe('App', () => {
  beforeEach(() => {
    mocked(useAppSelector).mockImplementation(testAppSelector);
    // @ts-ignore
    mocked(useAppDispatch).mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders App correctly', () => {
    renderer.create(<App />);
  });
});

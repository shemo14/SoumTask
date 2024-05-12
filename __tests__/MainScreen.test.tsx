import React from 'react';
import 'react-native';
import {ProductsList} from '../src/components';
import products from '../src/data/products.json';
import {it, describe, jest, beforeEach, afterEach, expect} from '@jest/globals';
import {useAppDispatch, useAppSelector} from '../src/app/reduxHooks.ts';
import {testAppSelector} from '../src/app/testAppSelector.ts';
import {mocked} from 'jest-mock';
import {render} from '@testing-library/react-native';

jest.mock('../src/app/reduxHooks.ts');

describe('MainScreen', () => {
  beforeEach(() => {
    mocked(useAppSelector).mockImplementation(testAppSelector);
    // @ts-ignore
    mocked(useAppDispatch).mockImplementation(() => jest.fn());
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should exist FlatList in ProductsList', () => {
    const InitialState = '';
    jest
      .spyOn(React, 'useState')
      .mockImplementationOnce(() => [InitialState, () => null]);

    const productListComponent = render(<ProductsList products={products} />);
    expect(productListComponent.getAllByTestId('ProductList').length).toBe(1);
  });
});

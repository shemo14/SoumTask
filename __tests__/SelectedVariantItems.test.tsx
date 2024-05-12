import React from 'react';
import 'react-native';
import SelectedVariantItem from '../src/components/SelectedVariantItem';
import {it, expect} from '@jest/globals';
import renderer from 'react-test-renderer';

it('renders SelectedVariantItem snapShot correctly', () => {
  const snapShot = renderer.create(<SelectedVariantItem item={'test item'} />).toJSON();
  expect(snapShot).toMatchSnapshot();
});

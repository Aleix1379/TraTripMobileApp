import 'react-native';
import React from 'react';
import renderer, {act} from 'react-test-renderer';
import Explore from '../src/screens/Explore';
import {fireEvent, render} from '@testing-library/react-native';

it('renders correctly', () => {
  const navigation = {navigate: jest.fn()};
  const tree = renderer.create(<Explore navigation={navigation} />);
  expect(tree).toMatchSnapshot();
});

it('Test navigation to Adventure is called correctly', () => {
  const navigation = {navigate: jest.fn()};
  const {getByTestId} = render(
    <Explore navigation={navigation} testID={'adventure-1'} />,
  );
  const button1 = getByTestId('adventure-1');
  fireEvent.press(button1);
  expect(navigation.navigate).toHaveBeenCalledWith('TourDetails', {
    id: 1,
  });
});

it('Test ProductSelector is pressed', () => {
  const navigation = {navigate: jest.fn()};
  const testID = 'explore';
  const {getByTestId} = render(
    <Explore testID={testID} navigation={navigation} />,
  );

  const selectProducts = getByTestId('select-products');
  const button = getByTestId('select-products-1');
  fireEvent.press(button);
  expect(selectProducts.parent?.parent?.props.value).toStrictEqual({
    id: 1,
    image: {testUri: '../../../assets/images/adventure.png'},
    name: 'Adventure',
  });
});

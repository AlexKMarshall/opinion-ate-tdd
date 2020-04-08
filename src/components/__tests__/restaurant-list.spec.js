import React from 'react';
import {render} from '@testing-library/react';
import {RestaurantList} from '../restaurant-list';

describe('RestaurantList', () => {
  const restaurants = [
    {id: 1, name: 'Sushi Place'},
    {id: 2, name: 'Pizza Place'},
  ];
  let loadRestaurants;
  let context;

  const renderWithProps = (propOverrides = {}) => {
    const props = {
      loadRestaurants: jest.fn().mockName('loadRestaurants'),
      restaurants,
      loading: false,
      ...propOverrides,
    };
    loadRestaurants = props.loadRestaurants;

    context = render(<RestaurantList {...props} />);
  };

  it('loads restaurants on first render', () => {
    renderWithProps();
    expect(loadRestaurants).toHaveBeenCalled();
  });

  describe('when loading succeeds', () => {
    beforeEach(() => {
      renderWithProps();
    });

    it('displays the restaurants', () => {
      const {queryByText} = context;

      expect(queryByText('Sushi Place')).toBeTruthy();
      expect(queryByText('Pizza Place')).toBeTruthy();
    });

    it('does not display the loading indicator while not loading', () => {
      const {queryByTestId} = context;
      expect(queryByTestId('loading-indicator')).toBeFalsy();
    });
  });

  it('displays the loading indicator while loading', () => {
    renderWithProps({loading: true});
    const {queryByTestId} = context;
    expect(queryByTestId('loading-indicator')).toBeTruthy();
  });
});

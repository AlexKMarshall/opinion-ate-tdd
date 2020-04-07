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

  beforeEach(() => {
    loadRestaurants = jest.fn().mockName('loadRestaurants');
    context = render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />,
    );
  });

  it('loads restaurants on first render', () => {
    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('displays the restaurants', () => {
    const {queryByText} = context;

    expect(queryByText('Sushi Place')).toBeTruthy();
    expect(queryByText('Pizza Place')).toBeTruthy();
  });
});

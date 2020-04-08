import React from 'react';
import {render, act} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import flushPromises from 'flush-promises';
import {NewRestaurantForm} from '../new-restaurant-form';

describe('NewRestaurantForm', () => {
  const restaurantName = 'Sushi Place';

  let createRestaurant;
  let context;

  beforeEach(() => {
    createRestaurant = jest.fn().mockName('createRestaurant');
    context = render(<NewRestaurantForm createRestaurant={createRestaurant} />);
  });

  describe('when filled in', () => {
    beforeEach(async () => {
      createRestaurant.mockResolvedValue();

      const {getByPlaceholderText, getByTestId} = context;

      await userEvent.type(
        getByPlaceholderText('Add Restaurant'),
        restaurantName,
      );
      userEvent.click(getByTestId('new-restaurant-submit-button'));

      return act(flushPromises);
    });

    it('calls createRestaurant with the name', () => {
      expect(createRestaurant).toHaveBeenCalledWith(restaurantName);
    });

    it('clears the name', () => {
      const {getByPlaceholderText} = context;
      expect(getByPlaceholderText('Add Restaurant').value).toEqual('');
    });
  });
});

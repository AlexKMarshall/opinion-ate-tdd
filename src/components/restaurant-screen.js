import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import RestaurantList from './restaurant-list';
import NewRestaurantForm from './new-restaurant-form';

const RestaurantScreen = () => (
  <Card>
    <CardContent>
      <Typography variant="h5">Restaurants</Typography>
      <NewRestaurantForm />
      <RestaurantList />
    </CardContent>
  </Card>
);

export default RestaurantScreen;

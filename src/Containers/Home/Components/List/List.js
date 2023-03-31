import React, { useEffect, useState } from 'react';

import { useAppSelector } from 'Store/Hook';
import { useAppDispatch } from 'Store/Hook';

import { Box, Grid, Typography } from '@mui/material';
import ListItem from './Components/ListItem/ListItem';
import { getMovies } from 'Core/Apis/MovieApi';
import { setMovie } from 'Store/Features/Movie/MovieSlice';
import { getMovie } from 'Store/Features/Movie/MovieSelector';

const List = () => {
  const dispatch = useAppDispatch();
  const data = useAppSelector(getMovie);

  useEffect(() => {
    (async () => {
      const data = await getMovies();
      dispatch(setMovie(data?.movie));
    })();
  }, []);

  return (
    <Box padding="10px 200px">
      {data?.map((item) => (
        <ListItem data={item} />
      ))}
    </Box>
  );
};

export default List;

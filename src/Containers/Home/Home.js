import React, { useState } from 'react';
import { Box, Grid } from '@mui/material';

import Input from 'Base/Components/Input/Input';
import VoteeButton from 'Base/Components/Button/Button';
import { useAppDispatch } from 'Store/Hook';
import { setUser } from 'Store/Features/Auth/AuthSlice';
import { useHistory } from "react-router-dom";
import NavBar from './Components/NavBar/NavBar';
import List from './Components/List/List';

const Home = () => {
  const history = useHistory();

  return (
    <Box padding="0px 35px">
      <NavBar />
      <List />
    </Box>
  );
};

export default Home;

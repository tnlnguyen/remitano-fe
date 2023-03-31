import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';

import { getUser } from 'Store/Features/Auth/AuthSelector';
import { useIntl } from 'react-intl';
import { useAppSelector } from 'Store/Hook';
import { useAppDispatch } from 'Store/Hook';

import Input from 'Base/Components/Input/Input';
import DemiButton from 'Base/Components/Button/Button';
import HomeIcon from 'Base/Components/Icon/Home/Home';
import Auth from 'Core/Messages/Auth';
import { login, logout } from 'Core/Apis/AuthApi';
import { setUser } from 'Store/Features/Auth/AuthSlice';
import FormDialog from 'Base/Components/Dialog/Dialog';
import { getMovies, shareMovie } from 'Core/Apis/MovieApi';
import { setMovie } from 'Store/Features/Movie/MovieSlice';

const NavBar = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [open, setOpen] = React.useState(false);

  const dispatch = useAppDispatch();
  const user = useAppSelector(getUser);

  const { formatMessage } = useIntl();

  const onValueChange = (value, isEmailChange = false) => {
    isEmailChange ? setEmail(value?.target?.value) : setPassword(value?.target?.value);
    // dispatch(setUser(value?.target?.value))
  };

  const handleLoginRegister = async () => {
    const result = await login({
      email,
      password,
    });

    if (result) {
      dispatch(setUser(result?.user));
      setToken(result?.tokens);
    } else {
      alert('Error');
    }
  };

  const handleLogout = async () => {
    await logout({
      refreshToken: await getRefreshToken(),
    });
    dispatch(setUser(null));
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleShareMovie = async (url) => {
    await shareMovie({ url });

    const data = await getMovies();
    dispatch(setMovie(data?.movie));

    handleClose();
  };

  return (
    <Box>
      <Grid
        container
        spacing={0}
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        style={{ borderBottom: '3px solid black', padding: '10px 0px' }}
      >
        <Box display="flex">
          <HomeIcon sx={{ fontSize: 40 }} />
          <Typography variant="h4">{formatMessage(Auth.appName)}</Typography>
        </Box>
        {user ? (
          <Grid item xs={3}>
            <Box sx={{ display: 'flex' }}>
              <Typography variant="h5" gutterBottom>
                {`${formatMessage(Auth.welcome)} ${user?.email}`}
              </Typography>
              <DemiButton variant="outlined" text="Share a movie" onClick={handleOpen} />
              <DemiButton variant="outlined" text="Logout" onClick={handleLogout} />
            </Box>
          </Grid>
        ) : (
          <Grid item xs={3}>
            <Box sx={{ display: 'flex' }}>
              <Input
                id="outlined-basic"
                label="Email"
                variant="outlined"
                value={email}
                onChange={(value) => onValueChange(value, true)}
              />
              <Input
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                value={password}
                onChange={(value) => onValueChange(value)}
              />
              <DemiButton variant="outlined" text="Login/Register" onClick={handleLoginRegister} />
            </Box>
          </Grid>
        )}
      </Grid>
      <FormDialog open={open} handleClose={handleClose} handleShare={handleShareMovie} />
    </Box>
  );
};

export default NavBar;

import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { Box, Grid, Typography } from '@mui/material';

const ListItem = ({data}) => {
  const { url, title, author, description } = data;

  return (
    <Box display="flex" justifyContent="space-between" margin="20px 0px">
      <ReactPlayer width="800px" height="300px" url={url || 'https://www.youtube.com/watch?v=ysz5S6PUM-U'} />
      <Box display="flex" flexDirection="column" maxWidth="800px" alignItems="flex-start" marginLeft="50px">
        <Typography variant="h4" color="red" margin="10px 0px">{title}</Typography>
        <Typography variant="h5">Shared By: {author}</Typography>
        <Box display="flex" justifyContent="space-between" margin="10px 0px">
          <ThumbUpOffAltIcon />
          <ThumbDownOffAltIcon />
        </Box>
        <Typography>Description: </Typography>
        <Typography variant="caption" display="block" gutterBottom margin="5px 0px">{description}</Typography>
      </Box>
    </Box>
  );
};

export default ListItem;

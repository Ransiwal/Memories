import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
  // USE SELECTORS GETS DATA FROM THAT GLOBAL STORE THAT USES AXIOS ACTIONS ADN REDUCERS THAT RETURN AN ACTION THAT HAS A PAYLOAD CALLED ACTION.PAYLOAD
  const posts = useSelector((state) => state.posts);   // state or store  ----> we know to use posts because a reducer is made called posts
  const classes = useStyles();

  return (
    !posts.length ? <CircularProgress /> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6} md={6}>
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;

import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

function Feed() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div>feed</div>
    </Container>
  );
}

export default Feed;

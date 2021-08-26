import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

function Post() {
  const classes = useStyles();

  return <>Post</>;
}

export default Post;

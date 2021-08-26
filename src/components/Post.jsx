import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  media: {
    height: 250,
  },
}));

function Post() {
  const classes = useStyles();

  return (
    <Card>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
          square
          title="My post"
        ></CardMedia>
        <CardContent>
          <Typography variant="h5">My first post</Typography>
          <Typography variant="body">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum nulla
            voluptates maiores! Reiciendis deleniti exercitationem maxime,
            adipisci nam rerum enim.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default Post;

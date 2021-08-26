import { Avatar, Container, makeStyles } from '@material-ui/core';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

function Rightbar() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div>Online Friends</div>
      <AvatarGroup max={4}>
        <Avatar
          alt="Remy Sharp"
          src="https://material-ui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://material-ui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://material-ui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://material-ui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://material-ui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
    </Container>
  );
}

export default Rightbar;

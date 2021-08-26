import { Container, makeStyles, Typography } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LinkedCameraIcon from '@material-ui/icons/LinkedCamera';
import DuoIcon from '@material-ui/icons/Duo';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import CollectionsIcon from '@material-ui/icons/Collections';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100%',
    [theme.breakpoints.up('lg')]: {
      height: '100vh',
    },
    paddingTop: theme.spacing(10),
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      backgroundColor: '#fff',
      color: '#555',
      borderRight: '1px solid #ece7e7',
    },
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginBottom: theme.spacing(3),
      cursor: 'pointer',
    },
  },
  icon: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
    },
  },
  text: {
    fontWeight: '500',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
}));

function Sidebar() {
  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <GroupAddIcon className={classes.icon} />
        <Typography className={classes.text}>Friends</Typography>
      </div>
      <div className={classes.item}>
        <FormatListBulletedIcon className={classes.icon} />
        <Typography className={classes.text}>Lists</Typography>
      </div>
      <div className={classes.item}>
        <LinkedCameraIcon className={classes.icon} />
        <Typography className={classes.text}>Camera</Typography>
      </div>
      <div className={classes.item}>
        <DuoIcon className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <PhoneIphoneIcon className={classes.icon} />
        <Typography className={classes.text}>Apps</Typography>
      </div>
      <div className={classes.item}>
        <CollectionsIcon className={classes.icon} />
        <Typography className={classes.text}>Collections</Typography>
      </div>
      <div className={classes.item}>
        <LocalMallIcon className={classes.icon} />
        <Typography className={classes.text}>Marketplace</Typography>
      </div>
      <div className={classes.item}>
        <SettingsIcon className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
      <div className={classes.item}>
        <ExitToAppIcon className={classes.icon} />
        <Typography className={classes.text}>Logout</Typography>
      </div>
    </Container>
  );
}

export default Sidebar;

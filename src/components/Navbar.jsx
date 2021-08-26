import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  search: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      display: (props) => (props.open ? 'flex' : 'none'),
      width: '70%',
      justifyContent: 'space-between',
    },
  },
  input: {
    color: '#fff',
    marginLeft: theme.spacing(1),
  },
  cancel: {
    marginRight: '20px',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  logoLg: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  logoSm: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  icons: {
    justifyContent: 'space-between',
    alignItems: 'center',
    display: (props) => (props.open ? 'none' : 'flex'),
  },
  badge: {
    marginRight: theme.spacing(3),
  },
  searchButton: {
    marginRight: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
}));

function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Bart Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          BART
        </Typography>
        <div className={classes.search}>
          <SearchIcon style={{ marginLeft: '20px' }} />
          <InputBase placeholder="Search..." className={classes.input} />
          <Cancel className={classes.cancel} onClick={() => setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search
            className={classes.searchButton}
            onClick={() => setOpen(true)}
          />
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="secondary" className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            alt="Avatar Boy"
            src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg"
            square
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

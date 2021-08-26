import {
  alpha,
  AppBar,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  search: {
    display: 'flex',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    width: '50%',
  },
  input: {
    color: '#fff',
    marginLeft: theme.spacing(1),
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
}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.logoLg}>
          Bart Dev
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          BART
        </Typography>
        <div className={classes.search}>
          <SearchIcon />
          <InputBase placeholder="Search..." className={classes.input} />
        </div>
        icons
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

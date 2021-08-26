import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({}));

function Navbar() {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Bart Dev</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;

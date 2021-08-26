import { Grid, makeStyles } from '@material-ui/core';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Feed from './components/Feed';
import Rightbar from './components/Rightbar';

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2}>
          <Sidebar />
        </Grid>
        <Grid item sm={7}>
          <Feed />
        </Grid>
        <Grid item sm={3}>
          <Rightbar />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

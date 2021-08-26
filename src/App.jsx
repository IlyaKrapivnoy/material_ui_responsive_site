import { makeStyles } from '@material-ui/core';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

const useStyles = makeStyles((theme) => ({}));

function App() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Sidebar />
    </div>
  );
}

export default App;

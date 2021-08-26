import { makeStyles } from '@material-ui/core';
import { Fab, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({}));

const Add = () => {
  const classes = useStyles();

  return (
    <div>
      <Tooltip title="Add" aria-label="add">
        <Fab color="secondary" className={classes.absolute}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default Add;

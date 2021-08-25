import { Button } from '@material-ui/core';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import React from 'react';

function App() {
    return (
        <div>
            <Button
                variant='outlined'
                color='secondary'
                size='small'
                startIcon={<AccessibilityIcon />}
            >
                Material UI
            </Button>
        </div>
    );
}

export default App;

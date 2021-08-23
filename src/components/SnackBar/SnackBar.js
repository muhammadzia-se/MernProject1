import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import React from 'react';

function SnackBar({message, severity, onClose, v, h, duration}) {
    return (
        <Snackbar 
            anchorOrigin={{vertical: v ? v : 'top', horizontal: h ? h : 'center'}}
            open={true} 
            autoHideDuration={duration ? duration : 3000} 
            onClose={onClose}
        >
            <Alert variant="filled" onClose={onClose} severity={ severity }>
            { message }
            </Alert>
        </Snackbar>
    );
}

export default SnackBar;
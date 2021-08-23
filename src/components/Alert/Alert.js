import React from 'react';
import Alert from '@material-ui/lab/Alert';

function alert({severity,onClose,message}) {
    return (
        <Alert severity={severity} onClose={onClose}>{ message }</Alert>
    );
}

export default alert;
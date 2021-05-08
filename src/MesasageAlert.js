import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert';

import './MessageAlert.css'
/*
  * Open: boolean
  * duration: Numeric
  * handleClose: fun
  * severity: String (success, warning, info, error)
  * elevation: Num
  * message: String
 */
const MessageAlert = ({ open, duration=6000, handleClose, severity, message, elevation=6}) => {

  const Alert = props =>  <MuiAlert elevation={elevation} variant="filled" {...props} />;

  return (
    <div className="messageAlert">
      <Snackbar open={open} autoHideDuration={duration} onClose={handleClose}>
        <Alert onClose={handleClose} severity={severity}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  )
}

export default MessageAlert

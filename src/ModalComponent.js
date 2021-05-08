import Dialog from '@material-ui/core/Dialog';
import Button from '@material-ui/core/Button';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import './Modal.css'
/****
 * open: String
 * handleClose: fun
 * title: string
 * children: component
 * footer: Boolean
*/
const ModalComponent = ({ open, handleClose, title, children, footer}) => {
  return (
   <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText
            id="scroll-dialog-description"
            tabIndex={-1}
          >
           {children = "" ? "":children}
          </DialogContentText>
        </DialogContent>
        {footer && <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Send
          </Button>
        </DialogActions>}
      </Dialog>
  )}

export default ModalComponent

/* import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/Send';
 */
import './ChatPanel.css'
import Container from '@material-ui/core/Container';
import Messages from './Messages'

const ChatPanel = () => {
  return (
    <div className="chatPanel">
      <div className="chatPanel__messages">
        <Container maxWidth="xs">
          <Messages />
        </Container>
      </div>
    </div>
  )
}

export default ChatPanel

import { Avatar, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@material-ui/core'

import {messages} from './data'

import './Messages.css'

const Messages = () => {

  return (
    <div className="messages">
      <List component="nav">
      {
      messages.map(msg => (
        <>
        <ListItem alignItems="flex-start" key={msg.id}
          className={`${msg?.msgAction === 'Read' ? '' : 'message__unread'}`}
        >
          <ListItemAvatar>
            <Avatar alt={msg.name} src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary={msg?.msgAction}
            secondary={
              <>
                <Typography
                  component="span"
                  variant="body2"
                  style={{'display': 'inline'}}
                  color="textPrimary"
                >
                  {msg.name}
                </Typography>
                {` — ${msg.message}`}
              </>
            }
          />
          <span className="message__time">9:30 am </span>
        </ListItem>
        <Divider variant="inset" component="li" />
      </>
      ))
        
      }
      </List>
    </div>
  )
}

export default Messages

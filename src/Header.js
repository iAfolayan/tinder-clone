import { useState } from 'react'
import PersonIcon from '@material-ui/icons/Person'
import ForumIcon from '@material-ui/icons/Forum'
import {IconButton} from '@material-ui/core'
import Badge from '@material-ui/core/Badge'
import ModalComponent from './ModalComponent'
import ChatPanel from './ChatPanel'
import DrawableMenu from './DrawableMenu'

import './header.css'

const Header = () => {

  const [open, setOpen] = useState(false)
  const [openDrawer, setOpenDrawer] = useState(false)

  const defaultProps = {
    color: 'secondary',
    children: <PersonIcon fontSize="large" />
  }

  const chatProps = {
    color: 'primary',
    children: <ForumIcon fontSize="large" />
  }

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleDrawer = openDrawer => e => {
    setOpenDrawer(!openDrawer)
   // setSwipe(true);
  };


  return (
    <>
    <div className="header">
      <IconButton className="header__icon" onClick={handleDrawer(openDrawer)}>
        <Badge badgeContent={0} {...defaultProps} />
      </IconButton>

      <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/TinderIcon-2017.svg" alt="tinder" className="header__logo header__icon" />

      <IconButton className="header__icon" onClick={handleClick}>
        <Badge badgeContent={2} {...chatProps} />
      </IconButton>
    </div>
    <ModalComponent 
      open={open}
      handleClose={handleClose}
      title="Messages"
      footer={false}
      children={<ChatPanel />} />

      <DrawableMenu
        open={openDrawer}
      />
    
    </>
  )
}

export default Header

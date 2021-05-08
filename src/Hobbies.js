import { useState } from 'react'
import { Avatar } from '@material-ui/core';
import Chip from '@material-ui/core/Chip';
import ModalComponent from './ModalComponent';
import SearchModal from './SearchModal';

const Hobbies = ({ label }) => {

  const [open, setOpen] = useState(false)
  const [currentOption, setCurrentOption] = useState('')

  const handleClick = value => {
    /* Search Mate */
    setCurrentOption(value)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div>
      {
        label.map(hobby => (
          <Chip label={hobby} key={hobby} avatar={<Avatar>{hobby.substring(0,1)}</Avatar>} onClick={() => handleClick(hobby)} />
        ))
      }
      <ModalComponent 
        open={open}
        handleClose={handleClose}
        title={currentOption}
        footer={false}
        children={<SearchModal />} />

    </div>
  )
}

export default Hobbies

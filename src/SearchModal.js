import { useState } from "react";
import { Avatar, Grid, IconButton, List, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core"
import AddCircleIcon from '@material-ui/icons/AddCircle';
// import DeleteSweepIcon from '@material-ui/icons/DeleteSweep';
import {people} from './data'

import './SearchModal.css'
import RatingComponent from "./RatingComponent";
import MessageAlert from "./MesasageAlert";

const SearchModal = () => {
  const [open, setOpen] = useState(false)
  const [minded, setMinded] = useState('')
  const [newPeople, setNewPeople] = useState(people)

  const handleAddMinded = value => {
    const filteredPeople = people.filter(person => person.id !== value)
    const findMinder = newPeople.find(person => person.id === value)
    setMinded(findMinder.name)
    setOpen(true)
    setNewPeople(filteredPeople)

    // setAdd(true)
  }

  const handleClose = () => {
    setOpen(false)
    // setAdd(false)
  }

  return (
    <div className="searchModal">
      <Grid item xs={12}>
          <Typography variant="h6" className="searchModal__title">
            Hey! We have thing in common
          </Typography>
          <div className="searchModal__demo">
            <List className="searchModal__list">
              {newPeople.map(person => 
                (<ListItem key={person.id} className="searchModal__listItem">
                  <ListItemAvatar>
                    <Avatar alt={person.name} className="searchModal__avatar" src={person.imgUrl} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={person.name}
                    secondary={<RatingComponent value={person.rating} />}
                  />
                  
                  <ListItemSecondaryAction    className="searchModal__iconButton"
                  onClick={() => handleAddMinded(person.id)}
                  >
                    <IconButton edge="end" aria-label="add">
                      <AddCircleIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>)
              )}
            </List>
          </div>
        </Grid>
        <MessageAlert 
          open={open}
          duration={2000}
          severity="success"
          elevation={6}
          message={`You have added ${minded}.`}
          handleClose={handleClose}
        />
    </div>
  )
}

export default SearchModal

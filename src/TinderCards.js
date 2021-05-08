import { useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'

// User data
import {data} from './data'

import Hobbies from './Hobbies'

import './tinderCards.css'

const TinderCards = () => {

  const [people, setPeople] = useState(data)
  // const [lastDirection, setLastDirection] = useState('')

  useEffect(() => {
    setPeople(data)
  }, [people])

  const swiped = (direction, nameToDelete) => {
    console.log(`removing: `, nameToDelete);
    // setLastDirection(direction)
  }

  const outOfFrame = name => {
    console.log(name + " left the screen")
  }

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {
          people.map(person => (
            <TinderCard 
              className="swipe"
              key={person.id}
              preventSwipe={["up", "down"]}
              swipe={dir => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div style={{ backgroundImage: `url(${person.imgUrl})`}} className="card">
                <div className="card__footer">
                  <p className="card__footer__title">{person.name}
                    <sup>
                      <small>
                        {person.gender}
                      </small>
                    </sup>
                  </p>
                  <p>
                    {person.church} ({person.role})
                  </p>
                </div>
                <Hobbies label={person.hobbies} />
              </div>
              {/* Hello World */}
            </TinderCard>
          ))
        }
      </div>
    </div>
  )
}

export default TinderCards

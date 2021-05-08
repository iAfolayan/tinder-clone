import { Box } from "@material-ui/core"
import Rating from '@material-ui/lab/Rating';

import './RatingComponent.css'

const RatingComponent = ({ value }) => {
  return (
    <div className="rating">
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating name="read-only" value={value} readOnly />
      </Box>
    </div>
  )
}

export default RatingComponent

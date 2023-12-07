import { React } from 'react'
import { Box, Checkbox } from '@mui/material'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteBorder from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Favorite from '@mui/icons-material/Favorite';
// import Checkbox from '@mui/material/Checkbox';

const Post = () => {
    return (
        <Box flex={3} p={2}>
            <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="200%"
        image="/static/images/cards/paella.jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}}/>} />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      
      </CardActions>
    
    </Card>
        </Box>
    )
}

export default Post;
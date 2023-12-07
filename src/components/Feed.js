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
import Post  from './Post'

const Feed = () => {
    return (
        <Box flex={3} p={2}>
           <Post/>
           <Post/>
           <Post/>
           <Post/>
        </Box>
    )
}

export default Feed;
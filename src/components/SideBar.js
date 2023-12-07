import { React } from 'react'
import { Box, List, ListItem, ListItemText, ListItemButton, ListItemIcon, Switch } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home';
import ModeNightIcon from '@mui/icons-material/ModeNight';

const SideBar = ({mode, setMode}) => {
    return (
        <Box  flex={1} p={2} sx={{display : {xs: 'none', sm: 'block'}}}>
          <Box position='fixed'>
               <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href="#">
               <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href="#">
               <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href="#">
               <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href="#">
               <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href="#">
               <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href="#">
               <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href="#">
               <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon component='a' href="#">
               <ModeNightIcon/>
              </ListItemIcon>
              <Switch onChange={(e=>setMode(mode==='light'? "dark": 'light'))}/>
            </ListItemButton>
          </ListItem>
          </List>
        </Box>
        </Box>
    )
}

export default SideBar;
import './App.css';
import SettingsIcon from '@mui/icons-material/Settings';
import  Feed  from './components/Feed'
import SideBar  from './components/SideBar'
import  RightBar  from './components/RightBar'
import Navbar from './components/Navbar'
import { Box, Stack} from '@mui/material'

function App() {
  const [mode, setMode] = useState("light")
  const darkTheme = createTheme({
    pallete:{
      mode: mode
    }
  })
  return (
    <ThemeProvider theme={darkTheme}>
    <Box bgcolor={'background.default'} color={'text.private'}>
    <Navbar/>
      <Stack direction='row' spacing={2} justifyContent='space-evenly'>
     <SideBar setMode={setMode} mode={mode}/>
     <Feed/>
     <RightBar/>
      </Stack>

    </Box>
    </ThemeProvider>
  );
}

export default App;

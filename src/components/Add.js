import { Avatar, IconButton, Tooltip } from '@mui/material';
import {React } from 'react'
import {Add as AddIcon } from "@mui/icons-material"
import DateRangeIcon from '@mui/icons-material/DateRange';

const StyleModal = styled(Modal)({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})
const UserBox = styled(Box)({
    display: 'flex',
    alignItems: 'center',
    gap: "10px",
    marginBottom: '20px'
})

const Add = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
        <Tooltip onClick={e=> setOpen(true)} title="Delete" sx={{position:'fixed', bottom:20, left:{xs:"calc(50%-25)", md:3}}}>
  <IconButton>
    <AddIcon />
  </IconButton>
</Tooltip>
<StyleModal
  open={open}
  onClose={e=>setOpen(false)}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style} width={400} height={280} bgcolor={'background.default'} color={'text.private'} bgcolor="white" p={3} borderRadius={5}>
    <Typography id="modal-modal-title" variant="h6" component="h2" color="gray" textAlign='center'>
      Create Post
    </Typography>
    <UserBox>
        <Avatar
         src=""
         sc={{width: 30, height: 30}}
         />
         <Typography fontWeight={500} variant="span">John</Typography>
    </UserBox>
    <TextField width={"100%"}
          id="standard-multiline-static"
          multiline
          rows={4}
          placeholderr="What's on your mind?"
          variant="standard"
        />
        <Stack direction="row" gap={1} mb={3}>
            <EmojiEmotions/>
            <EmojiEmotions/>
            <EmojiEmotions/>
            <EmojiEmotions/>
            <EmojiEmotions/>
        </Stack>
        <ButtonGroup fullWidth  variant="contained" aria-label="outlined primary button group">
  <Button>One</Button>
  <Button sx={{width:"100px"}}>
    
    <DateRangeIcon/>
  </Button>
</ButtonGroup>
  </Box>
</StyleModal>
        </>
    )
}

export default Add;
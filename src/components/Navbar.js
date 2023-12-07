import { InputBase, Typography } from '@mui/material';
import { React, useState } from 'react'
import { AppBar, Toolbar, styled, Box } from '@mui/material'
import { Pets, Mail, Notifications } from '@mui/icons-material';
import { Badge, Avatar, Menu, MenuItem } from '@mui/material';
// import Styled from '@emotion/styled'

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
    backgroundColor: 'White',
    padding: "0, 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
        display: "flex",
    }
}));

const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up('sm')]: {
        display: "none",
    }
}));





const Navbar = () => {

    const [open, setOpen] = useState(false);
    return (
        <AppBar position="sticky">
            <StyledToolBar>
                <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>Lama Dev</Typography>
                <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
                <Search><InputBase placeholder="search..." /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src="" onClick={e=>setOpen(true)}/>
                </Icons>
                <UserBox>
                    <Avatar sx={{ width: 30, height: 30 }} src="" />
                    <Typography variant="span">John</Typography>
                </UserBox>
            </StyledToolBar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                // anchorEl={anchorEl}
                open={open}
                onClose={e=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar;
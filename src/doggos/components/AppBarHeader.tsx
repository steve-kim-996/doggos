import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import { MenuIcon } from "./MenuIcon";

export const AppBarHeader = () => (<AppBar position="static">
    <Toolbar>    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
        <MenuIcon />
    </IconButton>
        <Typography variant="h6" color="inherit" component="div">
            Doggos
        </Typography>
    </Toolbar>
</AppBar>
)
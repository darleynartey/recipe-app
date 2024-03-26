import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";




export default function Navbar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography color="inherit" to="/recipes" 
                variant="h6" component={Link} sx={{ flexGrow: 1 }}>
                    Recipe App
                </Typography>

                <button to="/add-recipe" component={Link} variant="contained" color="primary">Add New Recipe</button>
            </Toolbar>
        </AppBar>
    );


}
import React, { useContext } from 'react';
import { ThemeButton, GlobalContext } from "../../Context/GlobalState";
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@material-ui/core';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';
import { Link } from 'react-router-dom';
import { MenuBox } from "./MenuBox";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();
    const Light = useContext(ThemeButton);
    const { orders } = useContext(GlobalContext);
    var count =[];
    orders.map((val, ind) => count.unshift(ind+1));
    return (
        <div className={classes.root}>
            <AppBar position="static" className={Light[0] ? '' : 'dark'}>
                <Toolbar>
                    <MenuBox />
                    <Typography variant="h6" className={classes.title}>
                        <Link to="/" className="Link">Shoe Store</Link>
                    </Typography>
                    <Link to="/" className="Link hide"><Button color="inherit" className="header-edit">Home</Button></Link>
                    <Link to="products" className="Link hide"><Button color="inherit" className="header-edit">Product</Button></Link>
                    <Link to="cart" className="Link">
                        <Button color="inherit" className="header-edit">
                            <div className="contain">
                                <ShoppingCartIcon />
                                <div className={count[0]!==undefined?count[0]>=10?'circled':'circle':''}>
                                    <div className="centered">{count[0]}</div>
                                </div>
                            </div>
                        </Button>
                    </Link>
                    <IconButton edge="end" color="inherit" size='medium' onClick={() => { Light[1](!Light[0]) }}>
                        {Light[0] ? <Brightness4Icon /> : <Brightness7Icon />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div >
    );
}
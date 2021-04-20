import './App.scss';
import "bootstrap/dist/css/bootstrap.css";
import CircularProgress from '@material-ui/core/CircularProgress'
import AnimationCanvas from './components/animationcanvas'
import {Suspense} from "react";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function App() {
    const classes = useStyles();
    return (
        <div className="animation-wrapper">
            <AppBar className='d-flex justify-content-center'
                    style={{backgroundColor: 'white'}}
            >
                <Toolbar className='d-flex justify-content-between flex-row flex-wrap'>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <h2 style={{alignSelf: 'center'}}>Syntech Industries</h2>
                    <Button color="inherit">Login</Button>
                </Toolbar>

            </AppBar>

            <Suspense fallback={<CircularProgress/>}>
                <AnimationCanvas/>
            </Suspense>
            <div className='d-flex justify-content-center flex-column align-content-center'
                 style={{backgroundColor: 'white', padding: '20vh 0', textAlign: 'center'}}>
                <h5 style={{color: '#AAA', alignSelf: 'center', margin: '0 auto'}}>Experience the Future of 3D...</h5>
                <h3 style={{
                    color: '#AAA',
                    alignSelf: 'center',
                    margin: '5vh auto',
                    padding: '2vh 3vw',
                    backgroundColor: '#444',
                    opacity: '0.6',
                    border: '1px solid #222',
                    boxShadow: '0 0 1.5vh #AAA'
                }}>Today</h3>
            </div>
        </div>
    );
}

export default App;

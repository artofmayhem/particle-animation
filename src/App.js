
import './App.scss';
import "bootstrap/dist/css/bootstrap.css";
import AnimationCanvas from "./components/animationcanvas";
import AppBar from '@material-ui/core/AppBar'


function App() {
    return (
        <div className="animation-wrapper">
            <AppBar className='d-flex justify-content-center'
            style={{backgroundColor: 'black', padding: '3vh 5vw'}}
            >
                <h1 style={{alignSelf: 'center'}}>Syntech Industries</h1>
            </AppBar>
                <AnimationCanvas/>
            <div className='d-flex justify-content-center flex-column align-content-center' style={{backgroundColor: 'black', padding: '20vh 0'}}>
                <h2 style={{color: '#AAA', alignSelf: 'center', margin: '0 auto'}}>Experience the Future of 3D...</h2>
                <h3 style={{color: '#AAA', alignSelf: 'center', margin: '5vh auto'}}>Today</h3>
            </div>

        </div>
    );
}

export default App;

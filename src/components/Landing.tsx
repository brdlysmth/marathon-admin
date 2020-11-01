import * as React from 'react';
import { Link } from '@reach/router';

// Material UI
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';

const Landing: React.FC = () => {
    return (
        <>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center' }}>
                <div>
                    <h1> Trainer </h1>  
                </div>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Link to='/plan'>
                    <Button variant='outlined'>
                        Sign In
                    </Button>
                </Link>
                <div style={{ width: '10px' }}></div>
                <Button variant='outlined'>
                    Sign Up
                </Button>
            </div>
            <div style={{ position: 'fixed', bottom: 25, width: '100%'}}>
                <IconButton>
                    <HomeIcon />
                </IconButton>
            </div> 
        </>
    )
}

export default Landing;
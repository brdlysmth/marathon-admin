import * as React from 'react';
import { Link } from '@reach/router';

// Material UI
import Button from '@material-ui/core/Button';

const Landing: React.FC = () => {
    return (
        <>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center' }}>
                <div>
                    <h1> Welcome to Marathon Trainer </h1>  
                </div>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <Link to='/number'>
                    <Button variant='outlined'>
                        Sign In
                    </Button>
                </Link>
                <Button variant='outlined'>
                    Sign Up
                </Button>
            </div>
        </>
    )
}

export default Landing;
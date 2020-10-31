import * as React from 'react';
import { Link } from '@reach/router';

// Material UI
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const GetPhoneNumber: React.FC = () => {
    
    return (
        <>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center' }}>
                <div>
                    <h1> Enter Phone Number </h1>  
                </div>
            </div>
            <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <div> 
                    <div>  
                        <TextField
                            id="outlined-dense"
                            label="Dense"
                            margin="dense"
                            variant="outlined"
                            />
                    </div>
                    <div style={{ height: '15px' }}/>
                    <div>
                        <Link to='/plan'>
                            <Button variant='outlined'>
                                Choose Plan
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GetPhoneNumber;
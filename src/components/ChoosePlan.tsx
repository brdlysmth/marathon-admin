import * as React from 'react';
import { Link } from '@reach/router';

// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { subscriptionsRef } from '../services/firebase';

const ChoosePlan: React.FC = () => {
    const [plan, setPlan] = React.useState('');
    const [number, setNumber] = React.useState('');

    const startSubscription = (number: string, plan: string) => {
        console.log('Starting subscription...')
        subscriptionsRef.push({
            phoneNumber: number,
            plan: plan
        })
    }

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
            setPlan(event.target.value as string);
        };

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
                            label="Number"
                            margin="dense"
                            variant="outlined"
                            style={{ minWidth: '200px' }}
                            />
                    </div>
                    <div style={{ height: '15px' }}/>
                </div>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center' }}>
                <div>
                    <h1> Choose Your Plan </h1>  
                </div>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center' }}>
                <FormControl style={{ minWidth: '200px'}}>
                    <InputLabel>Plan</InputLabel>
                    <Select 
                        value={plan}
                        input={<Input />}
                        onChange={handleChange}
                        > 
                        <MenuItem value={1}> 0 - 5K </MenuItem>
                        <MenuItem value={2}> 5K - 10K </MenuItem>
                        <MenuItem value={3}> 10K - Half Marathon </MenuItem>
                        <MenuItem value={4}> Half Marathon - Marathon </MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{ height: '50px' }}/>
            <div>
                <Button variant='outlined' onSubmit={() => startSubscription(number, plan)}> 
                    Start 
                </Button>
            </div>
        </>
    )
}

export default ChoosePlan;
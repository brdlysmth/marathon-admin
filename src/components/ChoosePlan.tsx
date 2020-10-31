import * as React from 'react';
import { Link } from '@reach/router';
// graphql stuff 
import { useQuery, useMutation, gql } from "@apollo/client";


// Material UI
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

const ADD_SUBSCRIPTION = gql`
        mutation addSubscription($input: AddSubscriptionInput!) {
            AddSubscription(input: $input) {
                success
            }
        }
    `;

const ChoosePlan: React.FC = () => {
    const [raceType, setRaceType] = React.useState('');
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [skillLevel, setSkillLevel] = React.useState('');
    const [
        addSubscription,
        { loading: mutationLoading, error: mutationError },
    ] = useMutation(ADD_SUBSCRIPTION);

    const startSubscription = async (phoneNumber: string, raceType: string, skillLevel: string) => {
        console.log('Starting subscription...')
        addSubscription({
            variables: { input: { phoneNumber: phoneNumber, raceType: raceType, skillLevel: skillLevel } },
            });
        // await subscriptionsRef.push({
        //     phoneNumber: phoneNumber,
        //     raceType: raceType,
        //     skillLevel: skillLevel
        // })
    }

    const handleRaceTypeChange = (event: React.ChangeEvent<{ value: unknown }>) => {
            setRaceType(event.target.value as string);
        };
    const handleSkillLevelChange = (event: React.ChangeEvent<{ value: unknown }>) => {
            setSkillLevel(event.target.value as string);
        };

    return (
        <>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center' }}>
                <div>
                    <h1> Get Started </h1>  
                </div>
            </div>
            <div style={{ display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <div> 
                    <div>  
                        <TextField
                            id="outlined-dense"
                            label="Phone Number"
                            margin="dense"
                            variant="outlined"
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            style={{ minWidth: '200px' }}
                            />
                    </div>
                    <div style={{ height: '15px' }}/>
                </div>
            </div>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center' }}>
                <FormControl style={{ minWidth: '200px'}}>
                    <InputLabel>Race Type</InputLabel>
                    <Select 
                        value={raceType}
                        input={<Input />}
                        onChange={handleRaceTypeChange}
                        > 
                        <MenuItem value={'5K'}> 5K </MenuItem>
                        <MenuItem value={'10K'}> 10K </MenuItem>
                        <MenuItem value={'HALFMARATHON'}> Half Marathon </MenuItem>
                        <MenuItem value={'FULLMARATHON'}> Marathon </MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{ height: '15px' }}/>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center' }}>
                <FormControl style={{ minWidth: '200px' }}>
                    <InputLabel>Skill Level</InputLabel>
                    <Select 
                        value={skillLevel}
                        input={<Input />}
                        onChange={handleSkillLevelChange}
                        > 
                        <MenuItem value={'BEGINNER'}> Beginner </MenuItem>
                        <MenuItem value={'INTERMEDIATE'}> Intermediate </MenuItem>
                        <MenuItem value={'ADVANCED'}> Advanced </MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div style={{ height: '50px' }}/>
            <div>
                <Button variant='outlined' onClick={() => startSubscription(phoneNumber, raceType, skillLevel)}> 
                    Start 
                </Button>
            </div>
        </>
    )
}

export default ChoosePlan;
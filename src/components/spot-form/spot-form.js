import React, { useEffect, useState } from 'react';
import {
    Button,
    Grid,
    TextField,
    Typography,
} from '@mui/material';
import { SearchField } from '../search-field/search-field';
import { useSelector } from 'react-redux';


export const SpotForm = () => {
    const [formData, setFormData ] = useState(() => {
        const storedData = localStorage.getItem('formData');
        return storedData ? JSON.parse(storedData) : {};
    });
    const locationInfo = useSelector(state => state.searchLocation.location)

    const classes = {
        formHeader: {
            marginBottom: '2em'
        },
        formContainer: {
            padding: "3em 1em 1em"
        },
        formField: {
            width: '100%'
        }
    }

    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    useEffect(() => {
         localStorage.setItem('formData', JSON.stringify(formData));
    }, [formData]);

    return (
        <>
            <Grid sx={classes.formContainer} container spacing={4}>
                <Grid container item xs={12} spacing={2}>
                    <Grid sx={classes.formHeader} item xs={12}>
                        <Typography variant="h4" gutterBottom>Add a new Spot</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <SearchField />
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant='contained'>Add Spot</Button>
                    </Grid>
                </Grid>

                <Grid container item xs={12} spacing={2}>
                    <Grid item xs={12}>
                        <TextField 
                            value={locationInfo.name} 
                            onChange={handleChange}
                            sx={classes.formField} 
                            label={'Name'} 
                            name='Name'
                            id="margin-normal" 
                            margin="dense" 
                            fullWidth 
                            required 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            value={locationInfo.address} 
                            onChange={handleChange}
                            sx={classes.formField} 
                            label={'Location'} 
                            name='Location'
                            id="margin-normal" 
                            margin="dense" 
                            fullWidth 
                            required 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            value={ locationInfo.description } 
                            onChange={ handleChange }
                            sx={ classes.formField } 
                            label={'Description'} 
                            name='Description'
                            id="margin-normal" 
                            margin="dense" 
                            fullWidth 
                        />
                    </Grid>
                </Grid>
            </Grid>
        </>
    )
}
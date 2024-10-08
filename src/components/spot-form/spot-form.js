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
    const [formData, setFormData] = useState({})
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
                            value={ formData.name ||locationInfo.name} 
                            onChange={handleChange}
                            sx={classes.formField} 
                            label={'Name'} 
                            name='name'
                            id="margin-normal" 
                            margin="dense" 
                            fullWidth 
                            required 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            value={ formData.address ||locationInfo.address} 
                            onChange={handleChange}
                            sx={classes.formField} 
                            label={'Location'} 
                            name='location'
                            id="margin-normal" 
                            margin="dense" 
                            fullWidth 
                            required 
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            value={ formData.description || locationInfo.description } 
                            onChange={ handleChange }
                            sx={ classes.formField } 
                            label={'Description'} 
                            name='description'
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
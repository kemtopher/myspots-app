import React, { useEffect, useState } from 'react';
import {
    Grid,
    TextField,
    Typography,
} from '@mui/material';


export const SpotForm = () => {
    const [formData, setFormData ] = useState(() => {
        const storedData = localStorage.getItem('formData');
        return storedData ? JSON.parse(storedData) : {};
    });

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
            <Grid sx={classes.formContainer} container xs={12}>
                <Grid sx={classes.formHeader} item xs={12}>
                    <Typography variant="h4" gutterBottom>Add a new Spot to your list</Typography>
                    <Typography variant="p" gutterBottom>Share a Spot to your list for others to see!</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        value={formData.Name} 
                        onChange={handleChange}
                        sx={classes.formField} 
                        label={'Name'} 
                        name='Name'
                        id="margin-normal" 
                        margin="dense" 
                        fullwidth required 
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        value={formData.Location} 
                        onChange={handleChange}
                        sx={classes.formField} 
                        label={'Location'} 
                        name='Location'
                        id="margin-normal" 
                        margin="dense" 
                        fullwidth required 
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        value={ formData.Description } 
                        onChange={ handleChange }
                        sx={ classes.formField } 
                        label={'Description'} 
                        name='Description'
                        id="margin-normal" 
                        margin="dense" 
                        fullwidth 
                    />
                </Grid>
            </Grid>
        </>
    )
}
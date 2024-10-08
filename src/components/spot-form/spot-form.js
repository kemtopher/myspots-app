import React, { useState } from 'react';
import {
    Grid,
    TextField,
    Typography,
    FormControl,
    InputLabel,
    FormHelperText,
    Input
} from '@mui/material';


export const SpotForm = () => {
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
    return (
        <>
            <Grid sx={classes.formContainer} container xs={12}>
                <Grid sx={classes.formHeader} item xs={12}>
                    <Typography variant="h4" gutterBottom>Add a new Spot to your list</Typography>
                    <Typography variant="p" gutterBottom>Share a Spot to your list for others to see!</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField sx={classes.formField} label={'Name'} id="margin-normal" margin="dense" fullwidth required />
                </Grid>
                <Grid item xs={12}>
                    <TextField sx={classes.formField} label={'Location'} id="margin-normal" margin="dense" fullwidth required />
                </Grid>
                <Grid item xs={12}>
                    <TextField sx={classes.formField} label={'Description'} id="margin-normal" margin="dense" fullwidth />
                </Grid>
            </Grid>
        </>
    )
}
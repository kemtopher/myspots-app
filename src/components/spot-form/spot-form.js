import React, { useState } from 'react';
import {
    Grid,
    TextField
} from '@mui/material';


export const SpotForm = () => {
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField label={'Spot Name'} id="margin-normal" margin="dense" />
                </Grid>
                <Grid item xs={12}>
                    <TextField label={'Address'} id="margin-normal" margin="dense" />
                </Grid>
                <Grid item xs={12}>
                    <TextField label={'Description'} id="margin-normal" margin="dense" />
                </Grid>
            </Grid>
        </>
    )
}
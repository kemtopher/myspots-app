import React, { useEffect, useState } from 'react';


export const container = ({ children }) => {

    return (
        <main className="app-grid">
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                    <Item>xs=8</Item>
                </Grid>
            </Grid>
        </main>
    )
}
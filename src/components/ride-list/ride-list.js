import React from "react";
import {
  Grid,
  Typography,
  Box
} from "@mui/material";
import { RideCard } from "../ride-card/ride-card";

export const RideList = ({nodes}) => {
  const classes = {
    header: {
      padding: '16px',
      color: 'var(--light-40)',
      borderBottom: '1px solid rgba(224, 224, 224, 1)',
    },
    headerTitle: {
      fontSize: '0.875rem',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0.01071em',
    },
    list: {
      height: '100%',
    },
    scrolllist: {
      height: 'calc(100% - 60px)',
      overflow: 'scroll'
    }
  }

  return (
    <>
      <section>
        <Grid container sx={classes.header} display='flex'>
          <Grid item xs={5}>
            <Typography variant="h3" align={'left'} sx={classes.headerTitle}>Ride</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h3" align={'left'} sx={classes.headerTitle}>Time</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h3" align={'left'} sx={classes.headerTitle}>Actions</Typography>
          </Grid>
        </Grid>
      </section>
      <section id="ride-list" style={ classes.scrolllist }>
        { nodes.length ? (
          <>
            { nodes.map(node => (
              <RideCard key={node.id} data={node} />
            )) }
          </>
        ) : (
          <Box display="flex" alignItems="center" justifyContent="center" height="100%">
            <Typography component="h1">
              No rides to show yet ...
            </Typography>
          </Box>
        ) }
      </section>
    </>
  );
};
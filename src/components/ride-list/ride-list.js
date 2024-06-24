import React from "react";
// import RideCard from '../'
import {
  Grid,
  Typography,
  Box
} from "@mui/material";
// import { makeStyles } from '@material-ui/core/styles/';

// const useStyles = makeStyles({
//   header: {
//     padding: '16px',
//     color: 'var(--light-40)',
//     borderBottom: '1px solid rgba(224, 224, 224, 1)',
//   },
//   headerTitle: {
//     fontSize: '0.875rem',
//     fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
//     fontWeight: '400',
//     lineHeight: '1.5',
//     letterSpacing: '0.01071em',
//   },
//   list: {
//     height: '100%',
//     overflow: 'scroll',
//   },
// });

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
      overflow: 'scroll',
    },
  }
  // const classes = useStyles();

  return (
    <section id="ride-list" sx={ classes.list }>
      { nodes.length ? (
        <>
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

          {/* { nodes.map(({ node }) => (
            <RideCard key={node.id} ride={node} />
          ))} */}
        </>
      ) : (
        <Box display="flex" alignItems="center" justifyContent="center" height="100%">
          <Typography component="h1">
            No rides to show yet ...
          </Typography>
        </Box>
      ) }
    </section>
  );
};
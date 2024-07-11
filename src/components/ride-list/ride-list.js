import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { setActive, removeActive } from "../../store/slices/events";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
  Box,
} from "@mui/material";
import {
  ExpandMore
} from '@mui/icons-material';
import { RideCard } from "../ride-card/ride-card";

export const RideList = ({nodes}) => {
  const dispatch = useDispatch();
  const rideList = useRef();
  const accordionEls = useRef([]);

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

  // WHY DOES THIS NOT WORK BUT BELOW onClick DOES WORK
  // const handleMarkerClick = (node) => {
  //   if (!node) return;
  //   dispatch(setActive(node));

    // if (node.active) {
    //   dispatch(removeActive(node));
    // } else {
    //   dispatch(setActive(node));
    // }
  // }

  // useEffect(() => {
    // if (activeAccordion === null) return;

    // const topPosition = accordionEls.current[activeAccordion].offsetTop;
    // rideList.current.scrollTop = topPosition;
  // }, [activeAccordion]);


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
      <section id="ride-list" ref={rideList} style={ classes.scrolllist }>
        { nodes.length ? (
          <>
            { nodes.map((node, index) => (
              <Accordion
                expanded={node.active}
                ref={el => accordionEls.current[index] = el}
                // SEE ABOVE
                // onClick={handleClickActive(node)}
                onClick={() => {
                  if (node.active) {
                    dispatch(removeActive());
                  } else {
                    dispatch(setActive(node))
                  }
                }}
                key={node.id}
              >
                <AccordionSummary
                expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
                >
                  <RideCard key={index} data={node} />
                </AccordionSummary>

                <AccordionDetails>
                  { node.description }
                </AccordionDetails>
              </Accordion>
              
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
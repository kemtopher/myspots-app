import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  setActive,
  removeActive,
  removeEvent,
  setRsvp,
  editEvent
} from '../../store/slices/events';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  AccordionActions,
  Grid,
  Typography,
  Box,
  IconButton
} from '@mui/material';
import { ExpandMore, ThumbUp, Delete, Edit } from '@mui/icons-material';
import { RideCard } from '../ride-card/ride-card';
import { CardDescription } from '../card-description/card-description';

export const RideList = ({ nodes }) => {
  const dispatch = useDispatch();
  const rideList = useRef();
  const accordionEls = useRef([]);

  const classes = {
    accordion: {
      boxShadow:
        '0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)'
    },
    header: {
      padding: '16px',
      color: 'var(--light-40)'
      // borderBottom: '1px solid rgba(224, 224, 224, 1)',
    },
    headerTitle: {
      fontSize: '0.875rem',
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: '400',
      lineHeight: '1.5',
      letterSpacing: '0.01071em'
    },
    list: {
      height: '100%'
    },
    scrolllist: {
      height: 'calc(100% - 60px)',
      overflow: 'scroll'
    },
    actions: {
      flexWrap: 'nowrap',
      justifyContent: 'flex-end'
    },
    uncheckedIcon: {
      color: 'var(--light-40)'
    },
    checkedIcon: {
      color: 'var(--primary-40)'
    },
    dangerIcon: {
      color: 'var(--red)'
    },
    details: {
      padding: '1em'
    },
    removePadding: {
      paddingLeft: '0',
      paddingRight: '0'
    }
  };

  return (
    <>
      <section>
        <Grid container sx={classes.header} display="flex">
          <Grid item xs={5}>
            <Typography variant="h3" align={'left'} sx={classes.headerTitle}>
              Ride
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h3" align={'left'} sx={classes.headerTitle}>
              Time
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography variant="h3" align={'left'} sx={classes.headerTitle}>
              Actions
            </Typography>
          </Grid>
        </Grid>
      </section>

      <section id="ride-list" ref={rideList} style={classes.scrolllist}>
        {nodes.length ? (
          <>
            {nodes.map((node, index) => (
              <Accordion
                expanded={node.active}
                sx={classes.accordion}
                ref={(el) => (accordionEls.current[index] = el)}
                key={node.id}
              >
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                  sx={classes.removePadding}
                  onClick={() => {
                    if (node.active) {
                      dispatch(removeActive(node));
                    } else {
                      dispatch(setActive(node));
                    }
                  }}
                >
                  <RideCard key={index} data={node} />
                </AccordionSummary>

                <AccordionDetails sx={classes.details}>
                  <CardDescription data={node} />
                </AccordionDetails>

                <AccordionActions>
                  <IconButton
                    variant="contained"
                    sx={node.rsvp ? classes.checkedIcon : classes.uncheckedIcon}
                    aria-label="RSVP to Event"
                    disableFocusRipple
                    disableRipple
                    onClick={() => {
                      dispatch(setRsvp(node));
                    }}
                  >
                    <ThumbUp />
                  </IconButton>
                  <IconButton
                    variant="contained"
                    sx={node.rsvp ? classes.checkedIcon : classes.uncheckedIcon}
                    aria-label="Edit Event"
                    disableFocusRipple
                    disableRipple
                    onClick={() => {
                      dispatch(editEvent(node));
                    }}
                  >
                    <Edit />
                  </IconButton>
                  <IconButton
                    variant="comtained"
                    sx={classes.dangerIcon}
                    aria-label="Delete Event"
                    disableFocusRipple
                    disableRipple
                    onClick={() => {
                      dispatch(removeEvent(node));
                    }}
                  >
                    <Delete />
                  </IconButton>
                </AccordionActions>
              </Accordion>
            ))}
          </>
        ) : (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            height="100%"
          >
            <Typography component="h1">No rides to show yet ...</Typography>
          </Box>
        )}
      </section>
    </>
  );
};

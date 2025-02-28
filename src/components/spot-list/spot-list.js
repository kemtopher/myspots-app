import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
  clearFocused,
  removeActive,
  setActive,
  setFocused
} from '../../store/slices/events';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography
} from '@mui/material';
import { SpotCard } from '../spot-card/spot-card';
import { CardDescription } from '../card-description/card-description';

export const SpotList = ({ nodes }) => {
  const dispatch = useDispatch();
  const spotlist = useRef();
  const accordionEls = useRef([]);

  const classes = {
    accordion: {
      boxShadow:
        '0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)'
    },
    activeAccordion: {
      boxShadow:
        '0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0), 0px 0px 0px 0px rgba(0, 0, 0, 0)',
      background: 'var(--light-10)'
    },
    header: {
      padding: '16px',
      color: 'var(--light-40)'
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
      height: '100%',
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
    <section ref={spotlist} style={classes.scrolllist}>
      {nodes.length ? (
        <>
          {nodes.map((node, index) => (
            <Accordion
              expanded={true}
              sx={node.active ? classes.activeAccordion : classes.accordion}
              ref={(el) => (accordionEls.current[index] = el)}
              key={node.id}
            >
              <AccordionSummary
                aria-controls="content-panel"
                sx={classes.removePadding}
                onClick={() => {
                  if (node.active) {
                    dispatch(removeActive(node));
                  } else {
                    dispatch(setActive(node));
                  }
                }}
                onMouseEnter={() => {
                  dispatch(setFocused(node));
                }}
                onMouseLeave={() => {
                  dispatch(clearFocused());
                }}
              >
                <SpotCard key={index} data={node} node={node} />
              </AccordionSummary>

              <AccordionDetails sx={classes.details}>
                <CardDescription data={node} />
              </AccordionDetails>
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
  );
};

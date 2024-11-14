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
import { classes } from './spot-list-styles';

export const SpotList = ({ nodes }) => {
  const dispatch = useDispatch();
  const spotlist = useRef();
  const accordionEls = useRef([]);

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

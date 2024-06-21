import React from 'react';
import { Button, ButtonGroup } from '@mui/material';


export const RideActions = () => {
    const styles = {
        actionContainer: {
            height: '56px',
            width: '100%'
        },
        actionButton: {
            width: '100%',
            height: '56px',
            borderRadius: '0'
        },
    }

  return (
    <ButtonGroup 
        variant="contained"
        color="primary"
        aria-label="contained primary button group"
        sx={styles.actionContainer}
    >
        <Button
            variant="contained"
            // className={`ridefind-button ${customClass} ${classes.buttonStyles}`}
            fullWidth
            size='large'
            disableElevation
            // destination="/rides"
            sx={styles.actionButton}
        >
            Nearby
        </Button>
        <Button
            variant="contained"
            // className={`ridefind-button ${customClass} ${classes.buttonStyles}`}
            fullWidth
            size='large'
            disableElevation
            destination="/rides/going"
            // disabled={!isAuthed()}
            sx={styles.actionButton}
        >
            RSVP'd
        </Button>
        <Button
            variant="contained"
            // className={`ridefind-button ${customClass} ${classes.buttonStyles}`}
            fullWidth
            size='large'
            disableElevation
            // destination="/rides/hosting"
            // disabled={!isAuthed()}
            sx={styles.actionButton}
        >
            Hosting
        </Button>
    </ButtonGroup>
  )
}

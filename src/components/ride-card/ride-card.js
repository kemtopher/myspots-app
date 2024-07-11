import React from 'react';
import { useFormatTime } from '../../hooks/useFormatTime';
import { useFormatDate } from '../../hooks/useFormatDate';
import {
    Typography,
    Grid,
    IconButton,
} from '@mui/material';
import {
    Delete,
    Edit,
    ThumbUp,
    Place,
} from '@mui/icons-material';


export const RideCard = ({data}) => {
    const classes = {
        card: {
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'nowrap',
            padding: '1em',
            borderBottom: '1px solid var(--light-40)',

            "&:last-child": {
                borderBottom: '0px solid #fff'
            }
        },
        actions: {
            flexWrap: 'nowrap'
        },
        rideTitle: {
            fontSize: '1.15em',
            color: 'var(--primary-40)',
            fontWeight: 700,
            textDecoration: 'none',

            // "&:hover": {
            //     textDecoration: 'none',
            //     color: 'var(--primary-40)'
            // }
        },
        ridePlace: {
            color: 'var(--primary-40)',
            display: 'flex',
            alignItems: 'center',
            lineHeight: '2'
        },
        rideTime: {
            justifyContent: 'flext-start'
        },
        secondaryText: {
            color: 'var(--primary-40)',
        },
        uncheckedIcon: {
            color: 'var(--light-40)'
        },
        checkedIcon: {
            color: 'var(--primary-40)'
        },
    }

    return (
        <Grid container sx={classes.card}>
            <Grid item xs={5}>
                <Typography component="h2" sx={classes.rideTitle}>
                    {data.name}
                    {/* <a href={`/ride/${data.id}`} styles={classes.rideTitle}>{data.name}</a> */}
                </Typography>

                <Typography component="h2" sx={classes.ridePlace}>
                    <Place fontSize='medium' />
                    { data.address }
                </Typography>
            </Grid>

            <Grid item xs={4} sx={classes.rideTime}>
                <Typography component="h2" sx={classes.secondaryText}>{ useFormatTime(data.datetime) }</Typography>
                <Typography component="h2" sx={classes.secondaryText}>{ useFormatDate(data.datetime) }</Typography>
            </Grid>

            <Grid
                sx={classes.actions}
                container
                item
                xs={3}
            >
                <Grid item>
                    <IconButton
                        variant="contained"
                        sx={classes.uncheckedIcon}
                        aria-label="RSVP to Event"
                        disableFocusRipple
                        disableRipple
                    >
                        <ThumbUp />
                    </IconButton>
                </Grid>
      
                <Grid item>
                    <IconButton
                        variant="contained"
                        sx={classes.uncheckedIcon}
                        aria-label="Edit Event"
                        disableFocusRipple
                        disableRipple
                    >
                        <Edit />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton
                        variant="comtained"
                        sx={classes.uncheckedIcon}
                        aria-label="Delete Event"
                        disableFocusRipple
                        disableRipple
                    >
                        <Delete />
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}
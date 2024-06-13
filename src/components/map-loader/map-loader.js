import React from 'react';
// import { CircularProgress } from '@material-ui/core';


export const MapLoader = ({
    error,
    loading,
    children
}) => {
    const loadingStyles = {
		width: '100%',
		height: '500px',
        height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fafafa'
	}

    if (error || loading) {
		return (
			<div className="map-loader" style={ loadingStyles }>
				{/* { error ? <div>ERROR: { error?.message }</div> : <CircularProgress />} */}
			</div>
		)
	}

    return (
        <>
            {children}
        </>
    )
}
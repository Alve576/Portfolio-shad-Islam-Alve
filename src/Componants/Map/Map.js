import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { Box,Typography } from '@mui/material';

const mapStyles = {
        center: {
          lat: 23.810331,
          lng: 90.412521
        },
        zoom: 11
};
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const MapContainer = () => {
        return (
            <Box style={{ height: '50vh', width: '50%',color:"#64ffda" }}>
              <Typography variant='h5'>Find Me </Typography>

                <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCdn1OsDCCNOPbehGSuEqNcVKdVaSvuuAE' }}
                defaultCenter={mapStyles.center}
                defaultZoom={mapStyles.zoom}
                >
                <AnyReactComponent
                    lat={23.810331}
                    lng={90.412521}
                    text="My Marker"
                />
                </GoogleMapReact>
          </Box>
        );
};

export default MapContainer;



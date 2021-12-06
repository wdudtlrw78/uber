import React, { useEffect } from 'react';
import tw from 'tailwind-styled-components';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken =
  'pk.eyJ1Ijoid2R1ZHRscnciLCJhIjoiY2t3dWQ0YXN0MWFnbDJubXRoam05OTRnaCJ9.JKWONkDVNjr80bHRW_DCnA';

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [30.664, 6.89],
      zoom: 3,
    });
  }, []);
  return <Wrapper id="map"></Wrapper>;
};

const Wrapper = tw.div`
  bg-red-500 flex-1
`;

export default Map;

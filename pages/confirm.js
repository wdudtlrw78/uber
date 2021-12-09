import React, { useCallback, useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import Map from './components/Map';
import { useRouter } from 'next/router';
import RideSelector from './components/RideSelector';
import Link from 'next/link';

const Confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState([0, 0]);
  const [dropoffCoordinates, setDropoffCoordinates] = useState([0, 0]);

  const router = useRouter();
  const { Pickup, DropOff } = router.query;

  const getPickupCoordinates = useCallback((pickup) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoid2R1ZHRscnciLCJhIjoiY2t3dWQ0YXN0MWFnbDJubXRoam05OTRnaCJ9.JKWONkDVNjr80bHRW_DCnA',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setPickupCoordinates(data.features[0].center);
      });
  }, []);

  const getDropoffCoordinates = useCallback((dropoff) => {
    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            'pk.eyJ1Ijoid2R1ZHRscnciLCJhIjoiY2t3dWQ0YXN0MWFnbDJubXRoam05OTRnaCJ9.JKWONkDVNjr80bHRW_DCnA',
          limit: 1,
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setDropoffCoordinates(data.features[0].center);
      });
  }, []);

  useEffect(() => {
    getPickupCoordinates(Pickup);
    getDropoffCoordinates(DropOff);
  }, [Pickup, DropOff]);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />

      <RideContainer>
        <RideSelector
          pickupCoordinates={pickupCoordinates}
          dropoffCoordinates={dropoffCoordinates}
        />
        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>

      <Link href="/">
        <BackButtun>
          <LeftArrow src="https://img.icons8.com/ios-filled/50/000000/left.png" />
        </BackButtun>
      </Link>
    </Wrapper>
  );
};

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const RideContainer = tw.div`
  flex-1 flex flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
  border-t-2
`;

const ConfirmButton = tw.div`
  bg-black text-white my-4 mx-4 py-4 text-center text-xl
`;

const BackButtun = tw.button`
  w-10 h-10 bg-white absolute left-4 top-4 rounded-full
`;

const LeftArrow = tw.img``;

export default Confirm;

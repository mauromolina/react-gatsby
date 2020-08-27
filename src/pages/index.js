import React from "react"
import Layout from "../components/layout"
import HotelImage from '../components/hotelImage';
import IndexContent from '../components/indexContent';
import useRoomsQuery from '../hooks/useRoomsQuery';
import {css} from '@emotion/core';
import styled from '@emotion/styled';
import RoomPreview from '../components/roomPreview';

const RoomList = styled.ul`
  max-width: 1200px;
  width: 95%;
  margin: 4rem auto 0 auto;

  @media (min-width: 768px){
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 3rem;
  }
`;

const IndexPage = () => {

  const rooms = useRoomsQuery();

  return (
    <Layout>
      <HotelImage/>
      <IndexContent/>
      <h2
        css= {css`
          text-align: center;
          margin-top: 5rem;
          font-size: 3rem;
        `}>
        Nuestras habitaciones
      </h2>
      <RoomList>
        { rooms.map( room => (
          <RoomPreview
            key={room.id}
            room={room}
          />
        ))}
      </RoomList>
    </Layout>
  )
}

export default IndexPage

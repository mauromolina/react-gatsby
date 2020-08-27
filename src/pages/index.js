import React from "react"
import Layout from "../components/layout"
import HotelImage from '../components/hotelImage';
import IndexContent from '../components/indexContent';
import useRoomsQuery from '../hooks/useRoomsQuery';

const IndexPage = () => {

  useRoomsQuery();

  return (
    <Layout>
      <HotelImage/>
      <IndexContent/>
    </Layout>
  )
}

export default IndexPage

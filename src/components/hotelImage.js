import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImgBackground = styled(BackgroundImage)`
    height: 500px;
`;

const ImgText = styled.div`
    background-image: linear-gradient( to top, rgba(34, 49, 63, .8), rgba(34, 49, 63, .75) );
    color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 4rem;
        margin: 0;
    
    @media (max-width: 468px){
        font-size: 3rem;
    }
    
    }

    p {
        font-size: 2rem;
    }
`;

const HotelImage = () => {

    const { image } = useStaticQuery(graphql`
    query {
        image: file(relativePath: { eq: "1.jpg" }) {
        sharp:childImageSharp {
          fluid {
            srcSetWebp
          }
        }
      }
    }
    `);

    return ( 
        <ImgBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
            <ImgText>
                <h1>Bienvenido a MM Hotel</h1>
                <p>El mejor hotel para tus vacaciones</p>
            </ImgText>
        </ImgBackground>
         );
}
 
export default HotelImage;
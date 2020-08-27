import React from 'react';
import Layout from "../components/layout"
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import { graphql } from 'gatsby';

export const query = graphql `
    query($slug:String!) {
        allDatoCmsRoom (filter: { slug: {eq: $slug } }) {
        nodes {
            title
            description
            image {
            fluid(maxWidth:1200){
                ...GatsbyDatoCmsFluid
            }
            }
            }
        }
        }
        `;



const RoomTemplate = ({data: {allDatoCmsRoom : { nodes }}}) => {

    const { title, description, image} = nodes[0];
    return (
        <Layout>
            <main
                css={ css`
                    margin: 0 auto;
                    max-width: 1200px;
                    width: 95%;
                `}>
                <h1
                    css={ css`
                    margin-top: 4rem;
                    text-align: center
                `}>{title}</h1>
                <p>{description}</p>
                <Image fluid={image.fluid}/>
            </main>
        </Layout>
     );
}
 
export default RoomTemplate;
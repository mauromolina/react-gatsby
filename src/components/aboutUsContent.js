import React from 'react';
import { grahpql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

const Content = styled.main`
    padding-top: 4rem;
    max-width: 1200px;
    width: 95%;
    margin: 0 auto;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        column-gap: 3rem;
    }

    p {
        line-height: 2;
        margin-top: 2rem;
    }
`;

const AboutUsContent = () => {

    const query = useStaticQuery(graphql`
        query{
            allDatoCmsPage(filter: {slug: {eq: "aboutus"}}) {
            nodes {
                title
                content
                image {
                fluid ( maxWidth: 1200 ) {
                    ...GatsbyDatoCmsFluid
                }
                }
            }
            }
            }
        `);

    const { title, content, image} = query.allDatoCmsPage.nodes[0];

    return (
        <> 
            <h2
                css={ css`
                    text-align: center;
                    font-size: 4rem;
                    margin-top: 4rem;
                `}
                >
                    {title}
                </h2>
            <Content>
                <p>{content}</p>
                <Image fluid={image.fluid}/>
            </Content>
        </>
     );
}
 
export default AboutUsContent;
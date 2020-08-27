import React from 'react';
import Image from 'gatsby-image';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { Link } from 'gatsby'

const Button = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: rgba(44,62,80,.85);
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    text-align: center;
`;

const RoomPreview = ({room}) => {

    const {title, description, image, slug} = room

    return ( 
        <Link to={slug}
            css={ css`
                border: 1px solid #e1e1e1;
                margin-bottom: 2rem;
                transition: 0.6s;
                text-decoration: none;
                color: #000;

                &:hover {
                    transform: scale(1.06);
                    cursor: pointer;
                }
            `}>
            <Image
                fluid={image.fluid}
            />
            <div
                css={ css`
                    padding: 3rem;
                `}>
                <h3
                    css={ css`
                    font-size: 3rem;
                `}>
                    {title}
                </h3>
                <p>
                    {description}
                </p>
                <Button to={slug}>Ver Habitación</Button>
            </div>
        </Link>
     );
}
 
export default RoomPreview;
import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import Navbar from './navbar';
import { Link } from 'gatsby'

const HomeLink = styled(Link)`
    color: #fff;
    text-align: center;
    text-decoration: none;
`;

const Header = () => {
    return ( 
        <header
            css={ css`
                background-color: #222;
                padding: 1rem;
            `}>
            <div
                css={ css`
                    max-width: 1200px;
                    margin: 0 auto;

                    @media (min-width: 768px){
                        display: flex;
                        align-items: center;
                        justify-content: space-between
                    }
                `}>
                    <HomeLink to='/'>
                        <h1>
                            MM Hotel
                        </h1>
                    </HomeLink>
                <Navbar/>
            </div>
        </header>
     );
}
 
export default Header;
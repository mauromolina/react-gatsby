import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;

    @media (min-width: 768px){
        padding-bottom: 0
    }
`;

const NavLink = styled(Link)`
    color: #ffffff;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin-right: 1rem;

    &:last-of-type {
        margin-right: 0
    }

    &.actual {
        border-bottom: 2px solid #fff;
    }
`;

const Navbar = () => {
    return ( 
        <Nav>
            <NavLink 
                to={'/'}
                activeClassName="actual"
            >
                    Inicio
            </NavLink>
            <NavLink 
                to={'/aboutUs'}
                activeClassName="actual"
            >
                    Nosotros
            </NavLink>
        </Nav>
     );
}
 
export default Navbar;
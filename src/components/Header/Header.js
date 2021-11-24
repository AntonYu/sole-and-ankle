import React from "react";
import styled from "styled-components/macro";

import { COLORS, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";

const Header = () => {
    // Our site features two visual headers, but they should be
    // grouped semantically as a single header.
    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <PositionedLogo />
                <Nav>
                    <NavLink href="/sale">Sale</NavLink>
                    <NavLink href="/new">New&nbsp;Releases</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/collections">Collections</NavLink>
                </Nav>
            </MainHeader>
        </header>
    );
};

const PositionedLogo = styled(Logo)`
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 28px;
    line-height: 28px;
`;

const MainHeader = styled.div`
    padding: 0 32px;
    border-bottom: 1px solid ${COLORS.gray[300]};
    height: 74px;
    display: flex;
    align-items: center;
    position: relative;
`;

const Nav = styled.nav`
    display: flex;
    flex: 1;
    justify-content: center;
    gap: 48px;
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: ${COLORS.secondary};
    }
`;

export default Header;

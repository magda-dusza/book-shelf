import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LeftMenuItem = styled(NavLink)`
    text-decoration: none;
    height: 2rem;
    line-height: 2rem;
    padding: 0 6rem
    border-bottom: 1px solid gray;
    &:hover {
        background-color: gray;
        color: white;
    }
`;
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LeftMenuItem = styled(NavLink)`
    text-decoration: none;
    border-bottom: 1px solid #143454;
    height: 3rem;
    line-height: 3rem;
    padding: 0 1rem;
    color: #576871;
    font-weight: bold;
    margin: 0.5rem 0;
    &:hover {
        color: #FAFAFA;
    }
    &:active {
        color: #9C9C9C;
    }
    &.active {
        border-bottom: 1px solid gray;
        color: #FAFAFA;
    }
`;
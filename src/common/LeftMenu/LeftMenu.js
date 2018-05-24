import React from 'react';
import { LeftMenuItem } from './LeftMenuItem';
import { LeftMenuStyled } from './LeftMenuStyled';
 
export const LeftMenu = () => (
    <LeftMenuStyled>
        <LeftMenuItem to="/dashboard/myBooks">My Books</LeftMenuItem>
        <LeftMenuItem to="/dashboard/friendsBooks">Friends Books</LeftMenuItem>
        <LeftMenuItem to="/dashboard/wishBooks">Wish Books</LeftMenuItem>
        <LeftMenuItem to="/dashboard/myOrder">My Order</LeftMenuItem>
    </LeftMenuStyled>
);
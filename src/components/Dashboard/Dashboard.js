import React from 'react';
import { Route } from 'react-router-dom';

import { LeftMenu } from 'common/LeftMenu/LeftMenu';
import { Content } from 'common/Content/Content';

import { MyBooks } from './MyBooks/MyBooks';
import { FriendsBooks } from './FriendsBooks/FriendsBooks';
import { WishBooks } from './WishBooks/WishBooks';
import { MyOrder } from './MyOrder/MyOrder';

export const Dashboard = () => (
    <div>
        <LeftMenu/>
        <Content>
            <Route path="/dashboard/myBooks" component={MyBooks}/>
            <Route path="/dashboard/friendsBooks" component={FriendsBooks}/>
            <Route path="/dashboard/wishBooks" component={WishBooks}/>
            <Route path="/dashboard/myOrder" component={MyOrder}/>
        </Content>
    </div>
);
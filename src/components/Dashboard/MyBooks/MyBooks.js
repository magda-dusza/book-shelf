import React, {Fragment, Component} from 'react';

import { ContentWrapper } from 'common/Content/ContentWrapper';
import { Title } from 'shared/Title/Title';

import { BOOKS } from 'mock/books';

export class MyBooks extends Component {
    render() {
        return (
            <Fragment>
                <Title>MyBooks</Title>
                <ContentWrapper>
                    {BOOKS.map(book => (
                        <div>{book.title}</div>
                    ))}
                </ContentWrapper>
            </Fragment>
        );
    }
};
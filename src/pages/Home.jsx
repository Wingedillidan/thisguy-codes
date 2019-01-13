import * as React from 'react';

// Components
import SmallCard from '../components/cards/InfoSmall';
import CardList from '../components/cards/List';

export default class Home extends React.Component {
    construct() {
        // Pass
    }

    render() {
        return (
            <div className="home">
                <CardList>
                    <SmallCard label="Mentor" />
                    <SmallCard label="Devops" />
                    <SmallCard label="IT" />
                </CardList>
            </div>
        )
    }
}

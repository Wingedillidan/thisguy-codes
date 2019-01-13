import * as React from 'react';

import '../../styles/components/cards/List.scss';

export default function (props) {
    return (
        <div className="card-list">
            {props.children}
        </div>
    )
}

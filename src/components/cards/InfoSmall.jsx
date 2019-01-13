import * as React from 'react';

import '../../styles/components/cards/InfoSmall.scss';

export default function (props) {
    return (
        <div className={`card-info-small ${props.className}`}>
            <h1>{props.label}</h1>
        </div>
    );
}

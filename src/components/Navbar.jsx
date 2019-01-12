import * as React from 'react';
import {withRouter, Link} from 'react-router-dom';

import '../styles/components/Navbar.scss';

function Navbar(props) {
    return (
        <div className={props.className}>
            <nav>
                <Link to="/">THIS GUY</Link>
                <Link to="/app">HOME</Link>
            </nav>
        </div>
    )
}

export default withRouter(Navbar);

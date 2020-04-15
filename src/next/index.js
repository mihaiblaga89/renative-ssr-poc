import React from 'react';
import ScreenHome from '../screenHome';

export default () => (<>
    <ScreenHome className="home" />
    <style jsx>
        {`
        .home {
            position: unset !important;
            flex: 1;
        }
    `}
    </style>
    </>);

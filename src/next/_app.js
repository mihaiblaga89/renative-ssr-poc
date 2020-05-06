import React from 'react';
import Menu from '../menu';

import '../../styles/fonts.css';
import '../../styles/global.scss';

export default function MyApp({ Component, pageProps }) {
    
    return (
        <div className="page-container">
            <Menu focusKey="menu" />
            <Component {...pageProps} />
        <style jsx>{`
            .page-container {
                height: 100%;
                flex-direction: column;
                display: flex;
            }
        `}</style>
        </div>
    );
}

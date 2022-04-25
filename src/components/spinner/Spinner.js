import React from 'react';
import './index.css';

function Spinner({size}) {
    return (
        <div className={'spinner ' + size} />
    );
}

export default Spinner;

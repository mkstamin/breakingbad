import React from 'react';
import spinner from '../../image/spinner.gif';

const Spinner = () => (
    <div>
        <img
            src={spinner}
            alt="spinner"
            style={{ width: '200px', margin: 'auto', display: 'block' }}
        />
    </div>
);

export default Spinner;

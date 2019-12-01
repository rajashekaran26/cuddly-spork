import React from 'react';

const Scroll = (cardListAsProp) => {
    return (
        <div style={{overflowY: 'scroll', border: '1px solid black', height: '500px'}}>
            {cardListAsProp.children}
        </div>
    );
}

export default Scroll;
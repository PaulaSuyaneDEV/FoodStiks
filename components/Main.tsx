import React from 'react';

function Main({children}: { children: React.ReactNode }) {
    return (
        <div style={{flexGrow: 1, flexShrink: 0, flexBasis: 'auto'}}>{children}</div>
    );
}

export default Main;

import React from 'react';

export const ChildTwo = () => {
    console.log('ChildTwo Rendering')
    return(
        <div>
            ChildTwo component
        </div>
    )
}
export const MemoizedChildTwo = React.memo(ChildTwo)
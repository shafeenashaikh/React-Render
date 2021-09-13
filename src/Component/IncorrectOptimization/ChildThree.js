import React from 'react';

export const ChildThree = ({name}) => {

    const date = new Date()
    console.log('childThree Render')
    return(
        <div>
            Hello {name}. It is currently {date.getHours()}: {date.getMinutes()}: {''}
            {date.getSeconds()}
        </div>
    )
}
export const MemoizedChildThree = React.memo(ChildThree)
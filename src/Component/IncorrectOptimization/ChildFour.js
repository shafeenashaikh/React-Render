import React from "react";

export const ChildFour = ({name}) => {

    console.log('ChildFour Render')
    return(
        <div>
            Hello {name} 
        </div>
    )
}
export const MemoizedChildFour = React.memo(ChildFour)
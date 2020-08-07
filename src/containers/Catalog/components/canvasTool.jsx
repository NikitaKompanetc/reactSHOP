import React from 'react';

const CanvasTool = (props) => {
    return(
    <div className="tool">
        <div className="img-tool"><img src={props.source} height={props.height} /></div>
        <div>{props.name}</div>
    </div>
    )
}
export default CanvasTool;
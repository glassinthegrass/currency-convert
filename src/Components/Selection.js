import React, { Fragment } from 'react';
import './Selection.modules.css';
const Selection=({handleSelect,title,selected,selection,handleToggle,toggle})=>{



const SelectionMap=<div onClick={handleToggle} className='selectionBox'>
{selection.map((selected,i)=>{
    return <div onClick={()=>handleSelect(selected)}key={i} className='selected hover'>{`${selected.symbol}-${selected.denomination}`}</div>
})}
    </div>
const Selected=<div className='selectedBox'>
    <p className='title'>{title}</p>
<div className='selected hover' onClick={handleToggle}>{`${selected?.symbol}- ${selected.denomination}`}</div>
</div>

const display= toggle?SelectionMap:Selected;

return <Fragment>
{display}
</Fragment>
}
export default Selection

import React from 'react';
import './NumberPad.modules.css'
const NumberPad =({handle,handleExpense})=>(
    <div className='column'>
<div className='border column'>

<div className='keypad'>
  {NumberKey(7,handle)}
  {NumberKey(8,handle)}
  {NumberKey(9,handle)}


  {NumberKey(4,handle)}
  {NumberKey(5,handle)}
  {NumberKey(6,handle)}

  {NumberKey(1,handle)}
  {NumberKey(2,handle)}
  {NumberKey(3,handle)}

  {NumberKey('clear',handle)}
  {NumberKey(0,handle)}
  {NumberKey('reset',handle)}
  </div>
  <div onClick={()=>handleExpense()} className='enter'>
      Enter
  </div>
</div>
    </div>
)
export default NumberPad

const NumberKey=(n,handle)=>{
    return(<div  onClick={()=>handle(n)} className='number-key'>
  <p className='p'>{n}</p>
    </div>)
  }
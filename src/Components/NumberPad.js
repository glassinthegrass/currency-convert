import React from 'react';
import './NumberPad.modules.css'
const NumberPad =({item,handle,handleItem,handleExpense})=>(
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
  <input type='text' placeholder='Purchase?' value={item} onChange={e=>handleItem(e.target.value)}/>
  <div onClick={()=>handleExpense()} className='enter hover'>
      Enter
  </div>
</div>
    </div>
)
export default NumberPad

const NumberKey=(n,handle)=>{
    return(<div  onClick={()=>handle(n)} className='number-key hover'>
  <p className='p'>{n}</p>
    </div>)
  }
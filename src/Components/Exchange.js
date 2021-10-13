import React from 'react';
import './Exchange.modules.css'

const Exchange=({selected,amount})=>(
 <div className='exchangeBox'>
{`${amount.toFixed(2)} ${selected}`} 
    </div>
)
export default Exchange
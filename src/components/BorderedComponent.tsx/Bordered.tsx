import React, { FC } from 'react';
import './bordered.css';

const Bordered: FC<any> = (props) => {
  return (
    <div className='bordered'>{props.children}</div>
  )
}

export {Bordered};

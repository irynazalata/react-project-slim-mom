import React from 'react';

const AxiosList = ({arr, toGetProduct}) => {
  return <ul onClick={toGetProduct}>
    {arr.map(el => <li value={el.title.ru} data-id={el._id} key={el._id}>{el.title.ru}</li>)}
  </ul>
}

export default AxiosList;
import React from 'react';

const axiosList = (arr) => {
  return <select name="select" id="select">
    {arr.map(el => <option key={el._id} name={el.title.ru} value={el._id}>{el.title.ru}</option>)}
  </select>
}

export default axiosList;
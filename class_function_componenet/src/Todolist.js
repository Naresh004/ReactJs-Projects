import React from 'react';

const Todolist = ({todoslist,deletehandler}) => {
  return (
    <div>
      {todoslist.map((todo,index) => 
      <div key={index}>
        <h5>{todo} &nbsp; <button className='btn' onClick={() => deletehandler(index)}>Delete</button></h5>
      </div>)}
    </div>
  );
}

export default Todolist;

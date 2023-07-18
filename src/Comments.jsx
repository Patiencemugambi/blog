import React from 'react';

export default function Comment(props) {
  const { name, spouse, age } = props.student; 

  return (
    <div>
      <p>Name: {name}</p>
      <p>Spouse: {spouse}</p>
      <p>Age: {age}</p>
    </div>
  );
}

import React from 'react';
function Food ({name}) {
  return <h2>i love {name}</h2>
}
function App() {
  return (
  <div> 
    <h1>Hello!</h1> 
    <Food name="kimchi" />
    <Food name="goguma" />
    <Food name="samgubsal" />
    <Food name="meum" />
    <Food name="kimchi" />

    </div>
    );
}

export default App;

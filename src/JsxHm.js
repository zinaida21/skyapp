// import React from 'react'
// import ReactDOM from 'react-dom'

// function Book(props) {
//  return React.createElement('div', {}, [
//    React.createElement('h2', {}, props.name),
//    React.createElement('p', {}, props.year),
//   React.createElement('p', {}, props.price),
//  ])
// }

function Book(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.year}</p>
      <p>{props.price}</p>
    </div>
  )
}

export default Book

import React from 'react'


function Button(props) {
  const { children } = props
  return <button>{children}!!</button>
}


// const Button = ({children}) => (
//   <button>{children}!!</button>
// )

export default Button

import React from 'react'

function Button({text, action}) {

  return (
    <button onClick={ (e) => action(e)} className='generic-button'>
        {text}
    </button>
  )
}

export default Button
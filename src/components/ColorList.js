import React from 'react'

function ColorList() {
  const colors = [
    'firebrick',
    'rebeccapurple',
    'salmon',
    'darkslategray',
    'hotpink',
  ]

  const colorElements = colors.map((color, ind) => {
    return (
      <li style={{ color }} key={ind}>
        {color}
      </li>
    )
  })

  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>{colorElements}</ol>
    </div>
  )
}

export default ColorList

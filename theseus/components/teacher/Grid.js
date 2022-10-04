import React from 'react'

const ThesisBox = ({ path }) => {
  return (
    <div style={{ width: '100px', height: '100px', border: '1px solid red' }}>
      {path}
    </div>
  )
}

function Grid({ data }) {
  console.log(data)
  return (
    <div>
      {data.map((item) => (
        <ThesisBox key={item.id} path={item.path} />
      ))}
    </div>
  )
}

export default Grid

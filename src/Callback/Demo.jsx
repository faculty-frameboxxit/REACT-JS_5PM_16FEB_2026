// import React from 'react'
// import { Button } from 'react-bootstrap'

// const Demo = React.memo((props)=> {
//     console.log("first")
//   return (
//     <>
//     <Button onClick={props.onClick}>{props.name}</Button>
//     </>
//   )
// })

// export default Demo










import React from 'react'
import { Button } from 'react-bootstrap'

const Demo = React.memo((props)=> {
    console.log("first")
  return (
   <>
   <Button onClick={props.data}>{props.name}</Button>
   </>  
  )
})

export default Demo
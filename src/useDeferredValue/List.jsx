// import React, { useMemo } from 'react'

// function List(props) {
//     const number = 20000
//     const list = useMemo(()=>{
//         const data = []
//         for (let i = 0; i < number; i++) {
//             data.push(<div key={i}>{props.input}</div>)
            
//         }
//         return data
//     },[props.input])
//     return list
// }

// export default List


import React, { useDeferredValue, useEffect, useMemo } from 'react'

function List(props) {
    // const newdata = useDeferredValue(props.input)
    // console.log(newdata)
    const item = useMemo(()=>{
        const data = []
        for (let index = 0; index < 10000; index++) {
            data.push(<div key={index}>{props.input}</div>)
            
        }

        return data
    },[props.input])
   
  return item
}

export default List
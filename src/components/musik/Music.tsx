import React, {useState} from 'react';




export const Music = () => {
debugger
  console.log('render')
  const [count,setCount]=useState(0)
  const [fake, setFake]=useState(0)

  setTimeout(()=>{
    debugger
    document.title=count.toString()
    console.log('setTimeot')  },5000)


  return(

        <>
          Hello,{count}
          <button onClick={() => setCount(count+1)}>counter</button>
          <button onClick={() => setFake(fake+1)}>face </button>
        </>

  )
}
import React,{memo} from 'react'

const DemoA = ({handleDrilling}) => {
    console.log("redenring A")
    console.count("count A")
  return (
    <div>
      Demo A
    </div>
  )
}

export default memo(DemoA)

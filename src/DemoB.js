import React, {memo} from 'react'

const DemoB = ({handleDrilling}) => {
    console.log("redenring B")
    console.count("count B")
  return (
    <div>
      Demo B
    </div>
  )
}

export default memo(DemoB)

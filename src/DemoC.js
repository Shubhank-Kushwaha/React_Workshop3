import React, {memo} from 'react'

const DemoC = ({handleDrilling}) => {
    console.log("redenring C")
    console.count("count C")
  return (
    <div>
      Demo C
    </div>
  )
}

export default memo(DemoC)

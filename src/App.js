import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {counterState, decrementCounter, resetCounter} from './Redux/slices/userSlice';
import CounterValue from './components/CounterValue';
import DemoA from './DemoA';
import DemoB from './DemoB';
import DemoC from './DemoC';
import { useCallback, useState } from 'react';
function App() {
  const {testState, count}= useSelector((state)=> state.user);
  const [demoProp, setDemoProp] = useState("")
  console.log(testState, "intial state")
  const dispatch = useDispatch();
  const handleIncrement = ()=>
  {
    dispatch(counterState());
  }
  const handleDecrement = ()=>
  {
    dispatch(decrementCounter());
  }
  const handleReset = ()=>
  {
    dispatch(resetCounter());
  }

  const handleDrilling = useCallback( ()=>
  {
    console.log("Handle")
  },[])


  // const handleDrilling =  ()=>
  // {
  //   console.log("Handle")
  // }


  
  return (
    <div className="App">
     <h1>RTK- ReduxToolKit</h1>
     <h3>Counter:{count}</h3>
     <button onClick={()=> handleIncrement()}>Increment</button>
     <button onClick={()=> handleDecrement()}>Decrement</button>
     <button onClick={()=> handleReset()}>Reset</button>

     <div>
      <h1> Value from new comnponents</h1>
      <CounterValue/>
     </div>
     <div>
      <button onClick={()=> setDemoProp("Drilled Prop")}>Click Me</button>
      <DemoA handleDrilling={handleDrilling}/>
      <DemoB handleDrilling = {handleDrilling}/>
      <DemoC handleDrilling = {handleDrilling}/>
     </div>
     
    </div>
  );
}

export default App;

import { useSelector } from "react-redux"



function CounterValue()
{
const {count} = useSelector((state)=> state.user);
    return (
        <>
        <h3> Value of counter = {count}</h3>
        </>
    )

    
}
export default CounterValue

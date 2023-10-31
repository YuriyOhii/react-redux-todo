import { useSelector } from "react-redux"

export const MyComponent = () =>{
    const value = useSelector(state=>state.some.value)
}
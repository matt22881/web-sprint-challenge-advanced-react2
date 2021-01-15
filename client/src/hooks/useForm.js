// write your custom hook here to control your checkout form
import { useState } from 'react'

const useForm = (fields)=> {

  const [values, setValues] = useState(fields);
   
  const handleChanges = e => {
    setValues({ ...values, [ e.target.name ]: e.target.value });
  };
  
  const clearForm = () => {
    setValues(fields)
  }
  return [ values, handleChanges, clearForm ];
}
export default useForm
  
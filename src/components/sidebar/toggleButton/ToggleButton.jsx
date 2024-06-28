import React, {useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const ToggleButton = ({setShow}) => {
  const [icon, setIcon] = useState(false)

  return (
    <button onClick={()=> {setShow((prev)=> !prev), setIcon(!icon)}}>
    {icon? <CloseIcon/>: <MenuIcon/>}
    </button>
  )
}

export default ToggleButton

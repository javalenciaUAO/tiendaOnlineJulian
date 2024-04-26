import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddTaskIcon from '@mui/icons-material/AddTask';
import { useState } from 'react';

const CrBtnAccion = () => {
    const [isCheck, setValor] = useState(true)

    const handleCheck = () => {
        setValor(!isCheck)
    }

    console.log(isCheck)

    return <IconButton onClick={handleCheck}>{isCheck ? <AddShoppingCartIcon 
        color='primary' /> : <AddTaskIcon color='success' />}</IconButton>
}

export default CrBtnAccion
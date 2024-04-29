import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddTaskIcon from '@mui/icons-material/AddTask';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

interface Props {
    isCheck: boolean
    setValor?: () => void
    handleShow?: () => void
    isShow?: boolean
}

const CrBtnAccion = ({isCheck, setValor, handleShow, isShow = false }: Props) => {
    return(
     <>
        {isShow ? (
            <IconButton onClick={handleShow}>
            <RemoveRedEyeIcon color='primary' />
            </IconButton>
        ) : (
            <>
            <IconButton onClick={setValor}>{isCheck ? <AddShoppingCartIcon 
            color='primary' /> : <AddTaskIcon color='success' />}</IconButton>
            </>
        )}
     </>  
    )
}

export default CrBtnAccion
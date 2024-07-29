import { Button } from "@mui/material";
import { styled } from '@mui/system';
import { Colors } from '../../constants/Colors';

const CustomButton = styled(Button)({
    backgroundColor: Colors.PRIMARY,
    color: "white",
    '&:hover': {
        backgroundColor: Colors.PRIMARY,
    },
    fontWeight: 'bold',
    fontSize: 18,
    padding: "5px 35px",
    textTransform: "none",
    borderRadius: "20px",
    marginTop: 40,
    
});

export default CustomButton;

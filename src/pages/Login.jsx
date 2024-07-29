import { useState } from "react";
import { Checkbox, TextField, Box, Typography } from "@mui/material";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";
import loginWallpaper from '../assets/images/loginWallpaper.jpg';
import CustomButton from './Custom/CustomButton';




const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { error, loading, handleLogin } = useLogin();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await handleLogin(email, password);
    };    

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'right',
                backgroundImage: `url(${loginWallpaper})`,
                backgroundSize: 'cover',
                backgroundPosition: 'right',
                alignItems: 'center',
            }}
        >
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    padding: 4,
                    borderRadius: 5,
                    boxShadow: 3,
                    maxWidth: '25%',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'column',
                    color: 'white', 
                    '& .MuiFormLabel-root': {
                        color: 'white', 
                    },
                    '& .MuiInputBase-input': {
                        color: 'white', 
                    },
                    '& .MuiCheckbox-root': {
                        color: 'white', 
                    },
                    '& .MuiInputBase-root': {
                        '&:before': {
                            borderBottomColor: 'white', 
                        },
                        '&:after': {
                            borderBottomColor: 'black',
                        },
                    },
                }}
            >
                <Typography variant="h5" align="center" marginBottom="50px" fontWeight="bold" gutterBottom>
                    Admin Login
                </Typography>

                <TextField
                    variant="filled"
                    label="Email"        
                    fullWidth
                    className="mb-2"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                    sx={{ marginBottom: 2 }}
                />
                <TextField
                    variant="filled"
                    label="Password"
                    type="password"
                    fullWidth
                    className="mb-2"
                    onChange={e => setPassword(e.target.value)}
                    value={password}
                    sx={{ marginBottom: 2 }}
                />

                <Box display="flex" alignItems="center" justifyContent="center" marginTop="50px" sx={{ marginBottom: 2 }}>
                    <Checkbox color="primary" />
                    <Typography>Remember me</Typography>
                </Box>

                <Box display="flex" justifyContent="center">
                    <CustomButton type="submit" disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </CustomButton>
                </Box>

                {error && <Typography color="error" align="center">{error}</Typography>}

                <Typography
                    align="center"
                    sx={{ marginTop: 5, cursor: 'pointer'}}
                    onClick={() => navigate('/ForgotPassword')}
                >
                    Forgot your password?
                </Typography>
            </Box>
        </Box>
    );
};

export default Login;

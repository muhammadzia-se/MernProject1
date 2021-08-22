import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Avatar, Button, Paper, Grid, Typography, Container } from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'
import { useDispatch } from 'react-redux'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import useStyles from './styles'
import Input from './Input'
import Icon from './icon'
import { signin, signup } from '../../actions/auth'


const initialState = { firstName:'',lastName:'',email:'',password:'',confirmPassword:'' }

function Auth() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useHistory()
    const [ showPassword, setShowPassword ] = useState(false)
    const [ isSignup, setIsSignup ] = useState(false)
    const handleShowPassword = () => setShowPassword((prevShowPassword)=> !prevShowPassword)
    const [formData, setFormData] = useState(initialState)
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (isSignup){
            dispatch(signup(formData, history))
        }else{
            dispatch(signin(formData,history))
        }
    }
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]:e.target.value})
    }
    const switchMode = () => {
        setIsSignup((prevIsSignup) =>  !prevIsSignup)
        setShowPassword(false)
    }
    const googleSuccess = async(res) => {
        // ?. this operator will not throw any error if we did not have the object
        const result = res?.profileObj
        const token = res?.tokenId
        try {
            dispatch({type: 'AUTH', data: {result, token}})
            history.push('/')
        } catch (error) {
            console.log(error)
        }

    }
    const googleFailure = () => {
        console.log("Google Sign In was un-successful. Try again later");
    }
    
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant="h5">{isSignup ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )
                        }
                        <Input name="email" label="Email Address" handleChange={handleChange} type="email" />
                        <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword={handleShowPassword} />
                        { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        { isSignup ? 'Sign Up' : 'Sign In' }
                    </Button>
                    <GoogleLogin
                        clientId="737567947467-77h96a65cqeslpdbcka3j39iui9ilo7i.apps.googleusercontent.com"
                        onSuccess={googleSuccess}
                        onFailure={googleFailure}
                        cookiePolicy="single_host_origin"
                        render={(renderProps)=>(
                            <Button 
                                className={classes.googleButton} 
                                color="primary" 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                startIcon={<Icon />}
                                variant="contained"
                            >
                                Google Sign In
                            </Button>
                        )}
                    />
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Button onClick={switchMode}>
                                { isSignup ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"  }
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    );
}

export default Auth;
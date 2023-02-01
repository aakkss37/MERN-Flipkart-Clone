import React, { useState, useContext } from 'react';
import { styled, Box, Button, Dialog, TextField, Typography } from '@mui/material';
import { API } from '../../service/api';
import { DataContext } from '../../contextAPI/Dataprovider'



// style
const Component = styled(Box)`
	height: 65vh;
	width: 83vh;
	display: flex;
`
const ImageBox = styled(Box)`
	background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
	width: 33%;
	height: 82.8%;
	padding: 45px 35px;
	color: #FFFFFF;
	 & > h5 {
		font-size: 1.8rem;
        font-weight: 600
    }
	& p {
		color: rgb(219 214 221);
	}
`
const Wrapper = styled(Box)`
	padding: 45px 35px;
	display: flex;
	flex-direction: column;
	align-item: center;
	& > div, & > button{
        margin-top: 20px;
    }
`
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
	&:hover{
		background: #FB641B;
	}
`
const SignupButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
	&:hover{
		background: #FB641B;
	}
`
const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`
const CreateAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`
const HaveAccount = styled(Typography)`
    margin: auto 0 5px 0;
    text-align: center;
    color: #2874f0;
    font-weight: 600;
    font-size: 14px;
    cursor: pointer
`
const ErrorText = styled(Typography)`
	color: red;
	margin: 5px;
	font-size: 12px;
`


const initialAccountDetail = {
	name: '',
	email: '',
	password: '',
	phone: '',
}
const initialLoginUserDetail = {
	email: '',
	password: '',
}


const LoginDialog = (props) => {
	const [haveAccount, setHaveAccount] = useState(true);
	const [accountDetail, setAccountDetail] = useState(initialAccountDetail);
	const [loginUserDetail, setLoginUserDetail] = useState(initialLoginUserDetail);
	const { setLoggedinUser } = useContext(DataContext)
	const [isError, setIsError] = useState(false);

	// CLOSE DIALOG BOX
	const closeDialogBoxHandler = () => {
		props.setOpenDialog(false);
		setHaveAccount(true);
	}


	// SIGNUP HANDLER
	const signUpSubmitHandler = async () => {
		try {
			const responce = await API.userSignup(accountDetail);
			// console.log("account created sucessfully ===>  ", responce);
			if (!responce) return;
			setAccountDetail(initialAccountDetail);
			setHaveAccount(true);
			closeDialogBoxHandler();
			setLoggedinUser(responce.data)
			setIsError(false)
		} catch (error) {
			setIsError(true)
			console.log("Error while calling Signup API ===> ", error);
		}
	}


	// LOGIN HANDLER
	const loginUpSubmitHandler = async () => {
		try {
			const responce = await API.userLogin(loginUserDetail);
			// console.log("account created sucessfully ===>  ", responce);
			if (!responce) return;
			setLoginUserDetail(initialLoginUserDetail);
			closeDialogBoxHandler();
			setLoggedinUser(responce.data)
			setIsError(false)
		} catch (error) {
			setIsError(true);
			console.log("Error while calling Signup API ===> ", error);
		}
	}


	// INPUT CHANGE HANDLER
	const signupInputChangeHandler = (e) => {
		setAccountDetail({ ...accountDetail, [e.target.name]: e.target.value })
	}
	const loginInputChangeHandler = (e) => {
		setLoginUserDetail({ ...loginUserDetail, [e.target.name]: e.target.value })
	}

	
	return (
		<Dialog open={props.openDialog} onClose={closeDialogBoxHandler} PaperProps={{ sx: { maxWidth: 'unset' } }}>
			{ /* PaperProps={{sx: {maxWidth: 'unset'}}}---> mui dialog box have a default max width... 
			if your element takes occupied width more then that.. then a scrole bar will appear.. 
			to prevent thant and remove the default max-width we need to set this property */}
			<Component>
				{
					haveAccount
						?
						<ImageBox>
							<Typography variant="h5">Login</Typography>
							<Typography style={{ marginTop: 20 }}>Get access to your <br />Orders,  Wishlist and Recommendations</Typography>
						</ImageBox>
						:
						<ImageBox>
							<Typography variant="h5">Looks like you're new here!</Typography>
							<Typography style={{ marginTop: 20 }}>Sign up with your mobile number to get started</Typography>
						</ImageBox>
				}
				{
					haveAccount
						?
						<Wrapper>
							{isError && <ErrorText >Wrong email/password</ErrorText>}
							<TextField onChange={loginInputChangeHandler} name='email' value={loginUserDetail.email} label="Enter Email/mobile no." variant="standard" />
							<TextField onChange={loginInputChangeHandler} name='password' value={loginUserDetail.password} type='password' label="Enter Password" variant="standard" />
							<Text >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
							<LoginButton onClick={loginUpSubmitHandler}>Login</LoginButton>
							<Typography style={{ textAlign: "center" }}>OR</Typography>
							<RequestOTP>Request OTP</RequestOTP>
							<CreateAccount onClick={() => { setHaveAccount(false); setIsError(false) }} >New to Flipkart? Create an account</CreateAccount>
						</Wrapper>
						:
						<Wrapper>
							{isError && <ErrorText >Invalid input</ErrorText>}
							<TextField onChange={signupInputChangeHandler} name='name' value={accountDetail.name} label="Enter Name" variant="standard" />
							<TextField onChange={signupInputChangeHandler} name='phone' value={accountDetail.phone} label="Enter Mobile no." variant="standard" />
							<TextField onChange={signupInputChangeHandler} name='email' value={accountDetail.email} label="Enter Email" type='email' variant="standard" />
							<TextField onChange={signupInputChangeHandler} name='password' value={accountDetail.password} label="Enter Password" type='password' variant="standard" />
							<Text >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
							<SignupButton onClick={signUpSubmitHandler}>Continue</SignupButton>
							<Typography style={{ textAlign: "center" }}>OR</Typography>
							<HaveAccount onClick={() => { setHaveAccount(true); setIsError(false) }}>Already have account? Login</HaveAccount>
						</Wrapper>
				}

			</Component>

		</Dialog>

	)
}

export default LoginDialog

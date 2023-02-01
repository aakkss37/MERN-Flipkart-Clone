import React, { useState } from 'react';
import { styled, Box, Button, Dialog, TextField, Typography } from '@mui/material';



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
	& > div, & > button, & > p {
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
const initialAccountDetail = {
	name: '',
	email: '',
	password: '',
	phone: '',
}

const LoginDialog = (props) => {
	const [haveAccount, setHaveAccount] = useState(true)
	const [accountDetail, setAccountDetail] = useState(initialAccountDetail)

	const handleCloseDialogBox = () => {
		props.setOpenDialog(false);
		setHaveAccount(true);
	}
	const handleSignupUser = ()=>{
		console.log(accountDetail);
		setAccountDetail(initialAccountDetail);
		setHaveAccount(true);
	}

	const inputChangeHandle = (e) => {
		setAccountDetail({ ...accountDetail, [e.target.name]: e.target.value })
	}

	return (
		<Dialog open={props.openDialog} onClose={handleCloseDialogBox} PaperProps={{ sx: { maxWidth: 'unset' } }}>
			{ /* PaperProps={{sx: {maxWidth: 'unset'}}}---> mui dialog box have a default max width... 
			if your element takes occupied width more then that.. then a scrole bar will appear.. 
			to prevent thant and remove the default max-width we need to set this property*/}
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
							<TextField id="standard-basic" label="Enter Email/mobile no." variant="standard" />
							<TextField id="standard-basic" label="Enter Password" type='password' variant="standard" />
							<Text >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
							<LoginButton>Login</LoginButton>
							<Typography style={{ textAlign: "center" }}>OR</Typography>
							<RequestOTP>Request OTP</RequestOTP>
							<CreateAccount onClick={() => setHaveAccount(false)} >New to Flipkart? Create an account</CreateAccount>
						</Wrapper>
						:
						<Wrapper>
							<TextField id="standard-basic" onChange={inputChangeHandle} name='name' value={accountDetail.name} label="Enter Name" variant="standard" />
							<TextField id="standard-basic" onChange={inputChangeHandle} name='phone' value={accountDetail.phone} label="Enter Mobile no." variant="standard" />
							<TextField id="standard-basic" onChange={inputChangeHandle} name='email' value={accountDetail.email} label="Enter Email" type='email' variant="standard" />
							<TextField id="standard-basic" onChange={inputChangeHandle} name='password' value={accountDetail.password} label="Enter Password" type='password' variant="standard" />
							<Text >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
							<SignupButton onClick={handleSignupUser}>Continue</SignupButton>
							<Typography style={{ textAlign: "center" }}>OR</Typography>
							<CreateAccount onClick={() => setHaveAccount(true)}>Already have account? Login</CreateAccount>
						</Wrapper>
				}

			</Component>

		</Dialog>

	)
}

export default LoginDialog

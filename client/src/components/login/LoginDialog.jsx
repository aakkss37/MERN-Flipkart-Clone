import React from 'react'
import { Dialog } from '@mui/material'


const LoginDialog = (props) => {
	return (
		<Dialog open={props.openDialog} onClose={()=>{props.setOpenDialog(false)}}>
			hello
		</Dialog>

	)
}

export default LoginDialog

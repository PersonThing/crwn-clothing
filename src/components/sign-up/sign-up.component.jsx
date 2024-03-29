import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

class SignUp extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		}
	}

	handleSubmit = async event => {
		event.preventDefault()

		const { displayName, email, password, confirmPassword } = this.state

		if (password !== confirmPassword) {
			alert("passwords don't match")
			return
		}

		try {
			const { user } = await auth.createUserWithEmailAndPassword(email, password)

			createUserProfileDocument(user, { displayName })

			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			})
		} catch (error) {
			console.log(error)
		}
	}

	handleChange = event => {
		const { name, value } = event.target
		this.setState({ [name]: value })
	}

	render() {
		const { displayName, email, password, confirmPassword } = this.state

		return (
			<div className='sign-up'>
				<h2>I do not have an account</h2>
				<span>Sign up with your email and password</span>

				<form className='sign-up-form' onSubmit={this.handleSubmit}>
					<FormInput
						label='Name'
						name='displayName'
						type='text'
						value={displayName}
						handleChange={this.handleChange}
						required
					/>
					<FormInput label='Email' name='email' type='email' value={email} handleChange={this.handleChange} required />
					<FormInput
						label='Password'
						name='password'
						type='password'
						value={password}
						handleChange={this.handleChange}
						required
					/>
					<FormInput
						label='ConfirmPassword'
						name='confirmPassword'
						type='password'
						value={confirmPassword}
						handleChange={this.handleChange}
						required
					/>

					<div className='buttons'>
						<CustomButton type='submit'>Sign up</CustomButton>
					</div>
				</form>
			</div>
		)
	}
}

export default SignUp

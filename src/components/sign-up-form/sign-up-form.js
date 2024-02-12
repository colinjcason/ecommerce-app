import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase';
import FormInput from '../form-input/form-input';
import Button from '../button/button';
import './sign-up-form.styles.scss'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    // event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });

    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already in use')
      }
      console.error(error)
    }
  }

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value })
  }

  return (
    <div className='sing-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={() => { handleSubmit() }}>
        <FormInput label="Display Name" type='text' onChange={handleChange} name='displayName' value={displayName} />

        <FormInput label="Email" type='email' onChange={handleChange} name='email' value={email} />

        <FormInput label="Password" type='password' onChange={handleChange} name='password' value={password} />

        <FormInput label="Confirm Password" type='password' onChange={handleChange} name='confirmPassword' value={confirmPassword} />
        <Button type='submit'>Sign up</Button>
      </form>
    </div>
  )
}

export default SignUpForm
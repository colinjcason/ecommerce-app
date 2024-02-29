import SignInForm from '../sign-in-form/sign-in-form';
import SignUpForm from '../sign-up-form/sign-up-form';
import './authentication.styles.js'
import { AuthenticationContainer } from './authentication.styles.js';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}

export default Authentication
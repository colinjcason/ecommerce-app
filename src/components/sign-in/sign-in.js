import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase';
import SignUpForm from '../sign-up-form/sign-up-form';


const SignIn = () => {
  const logGoogleUser = async () => {
    const {user} = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  }

  return (
    <div>
      <h2>SignIn</h2>
      <button onClick={logGoogleUser}>
        Sign in with google
      </button>
      <SignUpForm />
    </div>
  )
}

export default SignIn
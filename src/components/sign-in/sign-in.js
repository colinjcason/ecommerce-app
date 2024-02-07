import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase'

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
    </div>
  )
}

export default SignIn
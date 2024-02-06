import { signInWithGooglePopup } from '../../utils/firebase'

const SignIn = () => {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response);
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
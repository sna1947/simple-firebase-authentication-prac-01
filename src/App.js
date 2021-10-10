import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './App.css';
import initializeAuthencation from './Firebase/firebase.initialize';

initializeAuthencation();
const provider = new GoogleAuthProvider();
function App() {

  const handelGoogleSignin=()=>{
    const auth = getAuth();
    signInWithPopup(auth, provider)
    .then(result=>{
      const user = result.user;
      console.log(user);
    });
  }
  return (
    <div className="App">
      <button onClick={handelGoogleSignin}> Gooogle Sign in</button>
    </div>
  );
}

export default App;




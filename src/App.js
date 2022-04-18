import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos.js'
import {useAuthState} from "react-firebase-hooks/auth";
import {auth} from "./firebase";
import firebase from "./firebase";

const signInWithGoogle = () =>
  auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

const SignIn = () => (
  <main>
    <button onClick = {signInWithGoogle}>sign in with google </button>
  </main>
);

const App = () => {
    const [user] = useAuthState(auth);
    return user ? <Todos /> : <SignIn />
};

export default App;

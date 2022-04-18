import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos.js'

const signInWithGoogle = () => {};

const SignIn = () => (
  <main>
    <button onClick = {signInWithGoogle}>sign in with google </button>
  </main>
);

const App = () => {
    const user = "ok";
    return user ? <Todos /> : <SignIn />
};

export default App;

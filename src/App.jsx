import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContext from "./context/UserContext";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1 className="text-3xl font-bold underline">Learning Context!</h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;

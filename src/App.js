import './App.css';
import { BrowserRouter as Router } from "react-router-dom";
import UsersApp from "./components/UsersApp";

function App() {
  return (
    <div className="App">
      <Router>
        <UsersApp />
      </Router>
    </div>
  );
}

export default App;

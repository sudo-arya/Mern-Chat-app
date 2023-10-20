import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Homepage from "./Pages/Homepage";
import Chatpage from "./Pages/Chatpage";

function App() {
  return (
    <div className="App">
      {/* <Router> */}
      {/* <Routes> */}
      <Route path="/" component={Homepage} exact />
      <Route path="/chats" component={Chatpage} />
      {/* </Routes> */}
      {/* </Router> */}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import Layout from "./containers/Layout/Layout";
import { BrowserRouter } from "react-router-dom";

//<Profile />
//<Navbar />
function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Layout />
            </div>
        </BrowserRouter>
    );
}

export default App;

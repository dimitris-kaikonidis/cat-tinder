import "./App.scss";
import { BrowserRouter, Link, Route } from "react-router-dom";
import Home from "../containers/Home/Home";
import Category from "../containers/Category/Category";
import Overview from "../containers/Overview/Overview";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <header>
                    <Link to="/">
                        <img src="/assets/Logo.svg" alt="logo" />
                    </Link>
                </header>
                <Route exact path="/" component={Home} />
                <Route path="/category/:category" component={Category} />
                <Route path="/overview" component={Overview} />
            </BrowserRouter>
        </div>
    );
}

export default App;

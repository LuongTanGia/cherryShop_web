import { BrowserRouter as Router } from "react-router-dom";
import MainPage from "./components/mainPages/Pages";
import "./App.css";
import Header from "./components/mainPages/Header/Header";
import Footer from "./components/mainPages/Footer/Footer";
function App() {
    return (
        <Router>
            <div className="Home">
                <Header />
                <MainPage />
                <Footer />
            </div>
        </Router>
    );
}

export default App;

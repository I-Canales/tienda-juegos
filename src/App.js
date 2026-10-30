import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import routes from "./app/routes";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Router>
        <NavBar />
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
        <div className="container">
          <Footer />
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;

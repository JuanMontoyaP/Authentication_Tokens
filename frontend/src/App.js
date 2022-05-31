import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact/>
          <Route path="/login" element={<LoginPage />}/>
        </Routes>
      </Router>
    </div>

  );
}

export default App;

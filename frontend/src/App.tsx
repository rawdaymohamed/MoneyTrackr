import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from 'react-router-dom'
import Login from './pages/Auth/Login'
import Home from './pages/Dashboard/Home'
import Signup from './pages/Auth/Signup'
import Income from './pages/Dashboard/Income'
import Expenses from './pages/Dashboard/Expenses'
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expenses" element={<Expenses />} />
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
      </Router>
    </div>
  )
}

export default App
const Root = () => {
  // chec if user is authenticated
  const isAuthenticated = !!localStorage.getItem('token');

  // Redirect to login if not authenticated
  return (isAuthenticated ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />);
};
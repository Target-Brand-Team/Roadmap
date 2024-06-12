import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './components/Shared/Layout';
import Dashboard from './Pages/2024/Dashboard';
import Dashboard2025 from './Pages/2025/Dashboard2025';
import Dashboard2026 from './Pages/2026/Dashboard2026';


function App() {
  
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard2025" element={<Dashboard2025 />} /> 
          <Route path="/dashboard2026" element={<Dashboard2026 />} /> 
        </Route>   
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

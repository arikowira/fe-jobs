import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DetailJobsPage from './pages/detailjob';
import JobsPage from './pages/joblist';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<JobsPage />} />
        <Route path='detail/:id' element={<DetailJobsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

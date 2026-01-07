
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CalendarPage from './pages/CalendarPage';
import BlogPage from './pages/BlogPage';
import { CalendarProvider } from './context/CalendarContext';
import { PopupProvider } from './context/PopupContext';

function App() {
  return (
    <PopupProvider>
      <CalendarProvider>
        <Router basename={import.meta.env.BASE_URL}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/blog" element={<BlogPage />} />
          </Routes>
        </Router>
      </CalendarProvider>
    </PopupProvider>
  );
}

export default App;


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import Layout from './components/Layout';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import Insights from './pages/Insights';
import Education from './pages/Education';
import Profile from './pages/Profile';
import Onboarding from './pages/Onboarding';
import './App.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Router>
          <Routes>
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="calendar" element={<Calendar />} />
              <Route path="insights" element={<Insights />} />
              <Route path="education" element={<Education />} />
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
          <Toaster position="top-center" />
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ProgressProvider } from './store/progressStore';
import AppLayout from './components/AppLayout';
import Dashboard from './pages/Dashboard';
import CodingPracticePage from './pages/CodingPracticePage';

export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/coding" element={<CodingPracticePage />} />

            {/* Redirect any other sub-pages cleanly to / so user stays strictly on the 2 pages */}
            <Route path="/topic/:topicId" element={<Navigate to="/" replace />} />
            <Route path="/topic/:topicId/concept/:conceptId" element={<Navigate to="/" replace />} />
            <Route path="/topics" element={<Navigate to="/" replace />} />
            <Route path="/settings" element={<Navigate to="/" replace />} />

            {/* Redirect any old legacy links cleanly */}
            <Route path="/progress" element={<Navigate to="/" replace />} />
            <Route path="/bookmarks" element={<Navigate to="/" replace />} />
            <Route path="/revision" element={<Navigate to="/" replace />} />
            <Route path="/mock" element={<Navigate to="/coding" replace />} />

            {/* Fallback route */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  );
}

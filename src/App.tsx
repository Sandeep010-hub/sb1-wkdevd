import React from 'react';
import { useState } from 'react';
import { 
  Layout, 
  Login, 
  Dashboard, 
  Reports, 
  DataView, 
  Settings, 
  Help, 
  NotFound 
} from './components';

export type User = {
  username: string;
  name: string;
  role: string;
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState('dashboard');

  const handleLogin = (username: string, password: string) => {
    // Mock authentication - replace with real auth later
    if (username && password) {
      setUser({
        username,
        name: 'Jane Smith',
        role: 'Teacher'
      });
      setIsAuthenticated(true);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <Layout 
      user={user} 
      onLogout={handleLogout}
      currentPage={currentPage}
      onNavigate={setCurrentPage}
    >
      {currentPage === 'dashboard' && <Dashboard user={user} />}
      {currentPage === 'reports' && <Reports />}
      {currentPage === 'data' && <DataView />}
      {currentPage === 'settings' && <Settings user={user} />}
      {currentPage === 'help' && <Help />}
      {!['dashboard', 'reports', 'data', 'settings', 'help'].includes(currentPage) && <NotFound />}
    </Layout>
  );
}

export default App;
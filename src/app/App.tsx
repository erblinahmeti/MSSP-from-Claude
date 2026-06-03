import { useState } from 'react';
import { Toaster } from 'sonner@2.0.3';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Incidents from './components/Incidents';
import Calibrate from './components/Calibrate';
import NoiseReduction from './components/NoiseReduction';
import AlertRules from './components/AlertRules';
import Policies from './components/Policies';
import Playbooks from './components/Playbooks';
import Workbooks from './components/Workbooks';
import Reports from './components/Reports';
import Analytics from './components/Analytics';
import Clients from './components/Clients';
import ClientRegistry from './components/ClientRegistry';
import Workflows from './components/Workflows';
import Automations from './components/Automations';
import Settings from './components/Settings';
import HelpCenter from './components/HelpCenter';
import Notifications from './components/Notifications';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'incidents':
        return <Incidents />;
      case 'notifications':
        return <Notifications />;
      case 'calibrate-overview':
        return <Calibrate />;
      case 'noise-reduction':
        return <NoiseReduction />;
      case 'alert-rules':
        return <AlertRules />;
      case 'data-collection':
        return <Workbooks />;
      case 'ingestion-anomalies':
        return <Reports />;
      case 'ingestion-budget':
        return <Analytics />;
      case 'client-registry':
        return <ClientRegistry />;
      case 'onboard-client':
        return <Workflows />;
      case 'automated-reporting':
        return <Automations />;
      case 'settings':
        return <Settings />;
      case 'help-center':
        return <HelpCenter />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Toaster 
        position="top-right"
        toastOptions={{
          style: {
            background: 'white',
            border: '1px solid #2A96A8',
            color: '#092E3F',
          },
          className: 'toast',
          duration: 3000,
        }}
      />
      <Sidebar activeItem={activePage} onNavigate={setActivePage} />
      {renderPage()}
    </div>
  );
}

export default App;
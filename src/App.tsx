import React, { useEffect, useState } from 'react';
import './App.css';
import DetailedView from './views/DetailedView';
import PrescriptionView from './views/PrescriptionsView';

function App() {
  const [view, setView] = useState('prescriptions-view');

  const navigate = (view: string) => {
    setView(view);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="App">
      {view === 'prescriptions-view' && (
        <PrescriptionView navigate={navigate} />
      )}
      {view === 'detailed-view' && (
        <DetailedView navigate={navigate} />
      )}

    </div>
  );
}

export default App;

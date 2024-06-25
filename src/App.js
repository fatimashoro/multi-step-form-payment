import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersonalInfo } from './pages/PersonalInfo';
import SelectPage from './pages/SelectPage';
import { PickAddOnePage } from './pages/PickAddOnePage';
import { FinishingPage } from './pages/FinishingPage';
import { FinalPage } from './pages/FinalPage';
import { CombinedProviders } from './context/UserContext';
import './App.css';

function App() {
  return (
    <CombinedProviders>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<PersonalInfo />} />
          <Route path="/selectplan" element={<SelectPage />} />
          <Route path="/pick-one" element={<PickAddOnePage />} />
          <Route path="/finishing" element={<FinishingPage />} />
          <Route path="/final" element={<FinalPage />} />
        </Routes>
      </BrowserRouter>
    </CombinedProviders>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PersonalInfo } from './pages/PersonalInfo';
import SelectPage from './pages/SelectPage';
import { PickAddOnePage } from './pages/PickAddOnePage';
import { FinishingPage } from './pages/FinishingPage';
import { FinalPage } from './pages/FinalPage';
import { CombinedProviders } from './context/UserContext';
import './App.css';
import { SideBar } from './components/SideBar';


function App() {
  return (
    <CombinedProviders>
      
      <BrowserRouter >
      <section className="sm:flex  bg-Background sm:justify-center sm:py-20 h-100vh ">
            <div class="sm:flex  sm:border rounded-lg sm:bg-white  bg-Background outerdiv sm:pt-6 sm:pl-6 ">
                <div class=" innerdiv relative sm:static ">
                    <SideBar />
                </div>
            <Routes>
              <Route path="/" element={<PersonalInfo />} />
              <Route path="/selectplan" element={<SelectPage />} />
              <Route path="/pick-one" element={<PickAddOnePage />} />
              <Route path="/finishing" element={<FinishingPage />} />
              <Route path="/final" element={<FinalPage />} />
          </Routes>
          </div>
        </section>
      </BrowserRouter>
    </CombinedProviders>

  );
}

export default App;

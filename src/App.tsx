import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {SchedulePage} from "./pages/SchedulePage";
import "./App.scss"
import {NavBar} from "./components/Navbar";
import {StocksPage} from "./pages/StocksPage";
import {SeasonTicketsPage} from "./pages/SeasonTicketsPage";
import {StaffPage} from "./pages/StaffPage";
import {AboutPage} from "./pages/AboutPage";
import {WorkoutPage} from "./pages/WorkoutPage";
import {LoginSignupPage} from "./pages/LoginSignupPage";
import {AccountPage} from "./pages/Account";

function App() {
  return (
      <div className="APP">
          <div className="Nav">
              <NavBar />
          </div>
          <div className="Content">
              <Routes>
                  <Route path="/" element={<Navigate to="/Home" replace />} />
                  <Route path="/Home" element={<HomePage />} />
                  <Route path="/Stocks" element={<StocksPage />} />
                  <Route path="/Schedule" element={<SchedulePage />} />
                  <Route path="/SeasonTickets" element={<SeasonTicketsPage />} />
                  <Route path="/Staff" element={<StaffPage />} />
                  <Route path="/About" element={<AboutPage />} />


                  <Route path="/Workout/:WorkoutId" element={<WorkoutPage />} />
                  <Route path="/Account" element={<AccountPage />} />
                  <Route path="/Login" element={<LoginSignupPage />} />
                  <Route path="*" element={<Navigate to="/Home" replace />} />
              </Routes>
          </div>
      </div>
  );
}

export default App;

import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/HomePage";
import {StaticSchedulePage} from "./pages/StaticSchedulePage";
import "./App.scss"
import {NavBar} from "./components/Navbar";
import {SeasonTicketsPage} from "./pages/SeasonTicketsPage";
import {StaffPage} from "./pages/StaffPage";
import {AccountPage} from "./pages/Account";
import {MySeasonTicketPage} from "./pages/MySeasonTicketPage";
import {SWorkoutPage} from "./pages/SWorkoutPage";
import {STPurchasePage} from "./pages/STPurchasePage";
import {LoginPage} from "./pages/LoginPage";
import {SignupPage} from "./pages/SignupPage";
import {PersonalSchedulePage} from "./pages/PersonalSchedulePage";
import {PWorkoutPage} from "./pages/PWorkoutPage";

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
                  <Route path="/StaticSchedule" element={<StaticSchedulePage />} />
                  <Route path="/PersonalSchedule" element={<PersonalSchedulePage />} />
                  <Route path="/SeasonTickets" element={<SeasonTicketsPage />} />
                  <Route path="/SeasonTicket/Payment" element={<STPurchasePage />} />
                  <Route path="/MySeasonTicket" element={<MySeasonTicketPage /> } />
                  <Route path="/Staff" element={<StaffPage />} />
                  <Route path="/SWorkout/:Id" element={<SWorkoutPage />} />
                  <Route path="/PWorkout/:Id" element={<PWorkoutPage />} />
                  <Route path="/Account" element={<AccountPage />} />
                  <Route path="/Login" element={<LoginPage />} />
                  <Route path="/Signup" element={<SignupPage />} />
                  <Route path="*" element={<Navigate to="/Home" replace />} />
              </Routes>
          </div>
      </div>
  );
}

export default App;

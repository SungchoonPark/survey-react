import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SurveyContainer from "./component/SurveyContainer";
import Login from "./page/Login";
import AdminPage from "./page/AdminPage";
import SurveyComplete from "./page/SurveyComplete";
import AlreadyParticipated from "./page/AlreadyParticipated";
import StartSurvey from "./page/StartSuvey";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/survey" element={<SurveyContainer />} />
          <Route path="/start-survey" element={<StartSurvey />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route
            path="/already-participated"
            element={<AlreadyParticipated />}
          />
          <Route path="/complete" element={<SurveyComplete />} />
          <Route path="/" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

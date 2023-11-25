import React from "react";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";

import "./App.css";

import MainPage from "./pages/Main/Main";

// import NoticePage from "./pages/Notice/NoticePage";

import PlayerPage from "./pages/Player/PlayerPage";
import PlayerAll from "./components/Player/PlayerAll/PlayerAll";
import Fw from "./components/Player/Fw/Fw";
import Mf from "./components/Player/Mf/Mf";
import Df from "./components/Player/Df/Df";
import Gk from "./components/Player/Gk/Gk";

import SchedulePage from "./pages/Schedule/SchedulePage";
import ScheduleList from "./components/Schedule/ScheduleList/ScheduleList";
import ScheduleRegister from "./components/Schedule/ScheduleRegister/ScheduleRegister";
import ScheduleDetail from "./components/Schedule/ScheduleDetail/ScheduleDetail";

import RecordPage from "./pages/Record/RecordPage";
import Attendance from "./components/Record/Attendance/Attendance";
import Goal from "./components/Record/Goal/Goal";
import Assist from "./components/Record/Assist/Assist";
import Participation from "./components/Record/Participation/Participation";

import MyPage from "./pages/MyPage/MyPage";
import MyInfo from "./components/MyPage/MyInfo/MyInfo";
import MyAttendance from "./components/MyPage/MyAttendance/MyAttendance";
import MyRecord from "./components/MyPage/MyRecord/MyRecord";
import Setting from "./components/MyPage/Setting/Setting";

import SignUpPage from "./pages/SignUp/SignUpPage";
import LoginPage from "./pages/Login/LoginPage";
import Navbar from "./components/Navbar/Navbar";
import ScheduleUpdate from "./components/Schedule/ScheduleUpdate/ScheduleUpdate";
import StartingLineup from "./components/Schedule/StartingLineup/StartingLineup";
import ScheduleRecordSetting from "./components/Schedule/ScheduleRecordSetting/ScheduleRecordSetting";
import ScheduleRecord from "./components/Schedule/ScheduleRecord/ScheduleRecord";
import ScheduleRecordSummary from "./components/Schedule/ScheduleRecordSummary/ScheduleRecordSummary";
import RtAttendance from "./components/Schedule/RtAttendance/RtAttendance";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<MainPage />} />
          {/* <Route path='/notice' element={<NoticePage />} /> */}
          <Route path='/schedule/*' element={<SchedulePage />}>
            <Route index element={<ScheduleList />} />
            <Route path='register' element={<ScheduleRegister />} />
            <Route path=':match' element={<ScheduleDetail />} />
            <Route path='update/:match' element={<ScheduleUpdate />} />
            <Route
              path='recordsetting/:match'
              element={<ScheduleRecordSetting />}
            />
            <Route
              path='startingLineup/:match/:quarter'
              element={<StartingLineup />}
            />
            <Route path='record/:match/:quarter' element={<ScheduleRecord />} />
            <Route
              path='recordsummary/:match/:quarter'
              element={<ScheduleRecordSummary />}
            />
            <Route path='rtattendance/:match' element={<RtAttendance />} />
          </Route>
          <Route path='/record/*' element={<RecordPage />}>
            <Route path='attendance' element={<Attendance />} />
            <Route path='goal' element={<Goal />} />
            <Route path='assist' element={<Assist />} />
            <Route path='participation' element={<Participation />} />
          </Route>

          <Route path='/player/*' element={<PlayerPage />}>
            <Route path='all' element={<PlayerAll />} />
            <Route path='fw' element={<Fw />} />
            <Route path='mf' element={<Mf />} />
            <Route path='df' element={<Df />} />
            <Route path='gk' element={<Gk />} />
          </Route>
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/mypage/*' element={<MyPage />}>
            <Route path='myinfo' element={<MyInfo />} />
            <Route path='myattendance' element={<MyAttendance />} />
            <Route path='myrecord' element={<MyRecord />} />
            <Route path='setting' element={<Setting />} />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
};

export default App;

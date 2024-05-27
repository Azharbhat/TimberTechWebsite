import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Login from '../../Manager/Login/Login';
import Register from '../../Manager/Login/Register';
import Join from '../../Manager/Login/Join';
import MillList from '../../Worker/MillList';
import Welcome from '../../Manager/Login/Welcome';
import FlatLogCalculator from '../LogCalculator/FlatLogCalculator';
import LogCalculator from '../LogCalculator/LogCalculator';
import Attendance from '../Attendance/Attendance';
import WoodCutter from '../WoodCutter/WoodCutter';
import BoxBuyer from '../BoxBuyers/BoxBuyers';
import BoxMaker from '../BoxMakers/BoxMakers';
import Workers from '../Workers/Workers';
import Transporters from '../Transporters/Transporters';
import './Home.css'; // Import your CSS file for styling
import WorkerDetail from '../Workers/WorkerDetail'
import AttendanceDetail from '../Attendance/AttendanceDetail'
import BoxMakerDetail from '../BoxMakers/BoxMakerDetail';
import BoxBuyerDetails from '../BoxBuyers/BoxBuyerDetails';
import TransporterDetail from '../Transporters/TransporterDetail'
import WoodCutterDetail from '../WoodCutter/WoodCutterDetail';

const Home = () => { 
  return (
    <Router>
      <div className="containerrr">
        <Header />
        <div className="content">
          <Routes>
            {/* Define routes without Header and Footer */}
            <Route path="/Login" element={<LoginComponent />} />
            <Route path="/Register" element={<RegisterComponent />} />
            <Route path="/Join" element={<JoinComponent />} />
            <Route path="/MillList" element={<MillListComponent />} />
            <Route path="/" element={<WelcomeComponent />} />
            <Route path='/WorkerDetial' element={<WorkerDetail/>}/>
            <Route path='/AttendanceDetail' element={<AttendanceDetail/>}/>
            <Route path='/BoxMakerDetail' element={<BoxMakerDetail/>}/>
            <Route path ='/BoxBuyerDetail' element={<BoxBuyerDetails/>}/>
            <Route path='/TransporterDetail' element={<TransporterDetail/>}/>
            <Route path='/WoodCutterDetail' element={<WoodCutterDetail/>}/>

            
            {/* Define routes for components with Header and Footer */}
            // <Route path="/Workers" element={<WorkersComponent />}/>
            <Route path="/Attendance" element={<AttendanceComponent />} />
            <Route path="/WoodCutter" element={<WoodCutterComponent />} />
            <Route path="/BoxBuyers" element={<BoxBuyerComponent />} />
            <Route path="/BoxMakers" element={<BoxMakerComponent />} />
            <Route path="/Transporters" element={<TransportersComponent />} />
            <Route path="/FlatLogCalculator" element={<FlatLogCalculatorComponent />} />
            <Route path="/LogCalculator" element={<LogCalculatorComponent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

// Define a separate component for components with Header and Footer


// Generate component functions for Login, Register, Join, MillList, Welcome, Workers, and Transporters
const LoginComponent = () => <Login />;
const RegisterComponent = () => <Register />;
const JoinComponent = () => <Join />;
const MillListComponent = () => <MillList />;
const WelcomeComponent = () => <Welcome />;
const WorkersComponent = () => <Workers />;
const TransportersComponent = () => <Transporters />;

// Generate component functions for Attendance, WoodCutter, BoxBuyer, BoxMaker, FlatLogCalculator, and LogCalculator
const AttendanceComponent = () => <Attendance />;
const WoodCutterComponent = () => <WoodCutter />;
const BoxBuyerComponent = () => <BoxBuyer />;
const BoxMakerComponent = () => <BoxMaker />;
const FlatLogCalculatorComponent = () => <FlatLogCalculator />;
const LogCalculatorComponent = () => <LogCalculator />;

export default Home;

import logo from './logo.svg';
import './App.css';
import Home from './views/pages/home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Department from './views/pages/department/Department';
import Departments from './views/pages/departments/Departments';
import NewsAll from './views/pages/NewsAll/NewsAll';
import News from './views/pages/News/News';
import Appointment from './views/pages/Appointment/Appointment';
import AllDoctors from './views/pages/AllDoctors/AllDoctors';
import DoctorProfile from './views/pages/DoctorProfile/DoctorProfile';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Login from './views/pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import Registration from './views/pages/Registration/Registration';
import AdminDashboard from './views/pages/AdminDashboard/AdminDashboard';
import AdminRoute from './PrivateRoute/AdminRoute';
import ManageReviews from './views/pages/AdminDashboard/ManageReviews';
import ManageAppointment from './views/pages/AdminDashboard/ManageAppointment';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home></Home>} ></Route>
            <Route path='/department/:id' element={<Department></Department>} ></Route>
            <Route path='/departments' element={<Departments></Departments>} ></Route> 
            <Route path='/allNews' element={<NewsAll></NewsAll>} ></Route> 
            <Route path='/news/:id' element={<News></News>} ></Route>
            <Route path='/appointment' element={<PrivateRoute><Appointment></Appointment></PrivateRoute>} ></Route>
            <Route path='/doctors' element={<AllDoctors></AllDoctors>} ></Route>
            <Route path='/doctors/doctor/:id' element={<DoctorProfile></DoctorProfile>} ></Route>
            <Route path='/login' element={<Login></Login>} ></Route>
            <Route path='/registration' element={<Registration></Registration>} ></Route>
            <Route path='/dashboard' element={<AdminRoute><AdminDashboard></AdminDashboard></AdminRoute>} >
              <Route path='/dashboard/reviews' element={<ManageReviews></ManageReviews>}></Route>
              <Route path='/dashboard/appointment' element={<ManageAppointment></ManageAppointment>}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

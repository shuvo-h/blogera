import React from 'react';
import Footer from '../../components/footer/Footer';
import HomeCarosoul from '../../components/HomeComponents/carosoul/HomeCarosoul';
import Consultants from '../../components/HomeComponents/Consultants/Consultants';
import HookUp from '../../components/HomeComponents/hookup/HookUp';
import MedicalDepartment from '../../components/HomeComponents/medicalDepartment/MedicalDepartment';
import NewsHighlight from '../../components/HomeComponents/NewsHighlight/NewsHighlight';
import TopDoctors from '../../components/HomeComponents/TopDoctors/TopDoctors';
import Navbar from '../../components/navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HomeCarosoul></HomeCarosoul>
            <MedicalDepartment></MedicalDepartment>
            <TopDoctors></TopDoctors>
            <NewsHighlight></NewsHighlight>
            <HookUp></HookUp>
            <Consultants></Consultants>
            <Footer></Footer>
        </div>
    );
};

export default Home;
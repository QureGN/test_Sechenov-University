import React, { FunctionComponent } from 'react';
import {Header} from '../../components/header/Header'
import {PatientList} from '../../components/PatientList/PatientList'
export const MainPage: FunctionComponent =() => {
    return (
        <div >
            <div className="flex">   
                <Header/>
                <PatientList/> 
            </div>
            <footer className="bg-main-color/20 text-center text-xs text-[#6D6E71] px-5 pb-5 md:ml-28 flex-1">
                <span>© 2008-2023 Federal State Autonomous Educational Institution of Higher Education I.M. Sechenov
                     First Moscow State Medical University of the Ministry of Health of the Russian Federation
                      (Sechenov University) ISO 9001:2015 — all rights protected</span>
            </footer>
        </div>
        
    );
}
import React, { FunctionComponent, useState, useEffect } from 'react';
import { Table } from '../Table/Table';
import {useSelector, } from "react-redux";
import { setClients, setStateNewClient } from '../../store/reducer';
import axios from 'axios'
import { RootState } from '../../store/types';
import { useAppDispatch } from '../../store/hooks';
import { jsonPatient } from '../../const/const';

export const PatientList: FunctionComponent =() => {

    const [value, setValue] = useState<string>('')
    const dispatch = useAppDispatch()
    const listClient = useSelector((state: RootState) => state.clients.client)


    useEffect(() => {
        axios.get('http://127.0.0.1:8000/patient/all/')
          .then((response) => {
            dispatch(setClients(response.data));
            if (response.data.length === 0) {
                jsonPatient.map(patient => (
                    
                    axios.post('http://127.0.0.1:8000/patient/new/', patient).then((response)=>{
                        dispatch(setStateNewClient(response.data));
                    })
                ))
              
            }
          })
          
      }, []);

    return (
        <div className="w-full bg-main-color/20 py-9 px-6 md:ml-28 min-h-screen ">
             <h1 className="text-4xl font-bold leading-normal">Patient list</h1>   
            <hr className="my-6 -mx-6"></hr>  
            <div className="flex mb-2 "> 

                <div className="w-[400px] border-2 border-menu-color/10  flex rounded py-2">
                    <img src='https://users-table-demo-app.vercel.app/icn_search.svg' alt='Logo' className=" w-4 ml-8 "/>
                    <input className=" outline-none text-sm placeholder-menu-color w-full pl-2"
                        type="search" 
                        value={value}
                        placeholder="Search by name..." 
                        onChange={(event) => (setValue(event.target.value) )}/>
                </div>
                
                
            </div>
            
            <Table allClient={listClient} search={value}/>
        </div>
    );
}
import React, { FunctionComponent } from 'react'

export const Header: FunctionComponent =() => {
    return (
        <header className=" md:fixed hidden md:block md:bg-menu-color md:w-28 md:h-screen md:py-5 ">
        <div className=" flex flex-col items-center">
        <img src='https://users-table-demo-app.vercel.app/logo_university.svg' alt='Logo' className="w-16"/>
        <div className="mt-20 text-xs text-white space-y-8">
            <button className=" w-full items-center flex flex-col font-medium  opacity-50 p-1" >
                <img src='https://users-table-demo-app.vercel.app/icn_users.svg' alt='Logo' className=" w-6"/>
                <span className="mt-2 ">Patients</span>
            </button>
            <button className=" items-center flex flex-col font-medium  p-1 hover:opacity-50">
                <img src='https://users-table-demo-app.vercel.app/icn_logout.svg' alt='Logo' className=" w-6"/>
                <span className="mt-2 ">Log out</span>
            </button>
        </div>
            
    
        
        </div>
    </header> 
);
}

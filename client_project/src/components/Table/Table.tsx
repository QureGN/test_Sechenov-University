import React, { FunctionComponent, useEffect, useState } from 'react';
import { Column, DataTable, DataTableComponentsProps } from '../../types/types';
import { ColumnName, ColumnNames } from '../../const/const';
import { ColumnBody } from '../ColumnBody/ColumnBody';
import { HeaderTable } from '../HeaderTable/HeaderTable';
import {useSelector,} from "react-redux";
import { RootState } from '../../store/types';

// const ColumnName: Column[]=[
//  {
//     name: "#",
//     accessor: "id"
//  },
//  {
//     name: "Name",
//     accessor: "Name"
//  },
//  {
//     name: "Sex",
//     accessor: "Sex"
//  },
//  {
//     name: "Department",
//     accessor: "Department"
//  },
//  {
//     name: "Status",
//     accessor: "Status"
//  },
 

// ]

// enum ColumnNames {
//     Name = 'Name',
//     Sex = 'Sex',
//     Department = 'Department',
//     Status = 'Status'
//   }

export const Table: FunctionComponent<DataTableComponentsProps> =(props) => {

    const {allClient, search} = props
    const [filter, setSort] = useState<DataTable[]>([])
   
    const stateForSort = useSelector((state: RootState) => state.clients.stateForSort)
    const stateForSortDirection = useSelector((state: RootState) => state.clients.stateForSortDirection)
    

    const sortTable =(array : DataTable[], nameColumn: ColumnNames) => {
        const sortedClient = array.sort((a, b) => a[nameColumn].localeCompare(b[nameColumn]))
                
                if (stateForSortDirection === 2){
                    
                    const reversedClient = sortedClient.reverse();
                    
                    setSort(reversedClient)
                }else{
                    setSort(sortedClient)
                }
    }
     

    useEffect(() => {

        
        const filteredClients = allClient.filter((client: DataTable) =>
            client.Name.toLowerCase().includes(search.toLowerCase())
        );

        if (stateForSort !== ""){

            if (stateForSort === 'id'){
                console.log()
                const sortedClient = filteredClients.sort((a, b) =>   Number(a['id']) - Number(b['id']))
                
                if (stateForSortDirection === 2){
                    
                    const reversedClient = sortedClient.reverse();
                    
                    setSort(reversedClient)
                }else{
                    setSort(sortedClient)
                }
            }else if ((stateForSort === 'Sex') || (stateForSort === 'Name') 
                || (stateForSort === 'Department') || (stateForSort === 'Status')){
                sortTable(filteredClients, ColumnNames[stateForSort])
            }    
            
        }else{
            setSort(filteredClients)
        }
        
      }, [search, stateForSort, stateForSortDirection, allClient ]);
    
    return (
        <div>
            
            <table className="w-full ">
                <thead className="bg-white text-base text-menu-color font-normal border-main-color/20">
                    <tr className="border-b-8 border-main-color/20">
                        {ColumnName.map((column: Column, index: number) =>(
                            
                            <th className= {`font-normal py-8 text-left md:table-cell 
                            ${((index === 0) || (index === 1)) ? '' : 'hidden'} 
                            ${index===0 ? 'w-12' : ''}`} key={index}>

                                <HeaderTable header={column.name} index={index}/>
    
                            </th>
                        ))}
                        <th className=" font-normal px-4 py-8 text-left ">
                                <div>
                                
                                </div>
                                
                            </th>
                        
                    </tr>
                </thead>

                <tbody className=" text-base font-normal">
                    
                        { filter.length > 0 ? filter.map((dataclient: DataTable, index:number) =>(
                           
                            <tr className=" border-y-8 border-main-color/20 bg-white font-normal border-main-color/20" key={index}>


                                <td className="py-8 w-20 " >
                                    
                                    <ColumnBody column={dataclient.id} border={true} index={0}/>
   
                                </td>

                                <td className=" py-8 ">

                                    <ColumnBody column={dataclient.Name} border={false} index={1}/>
                                    
                                </td>
                                
                                <td className="py-8  hidden md:table-cell">
                                    <ColumnBody column={dataclient.Sex} border={true} index={2}/>
                                    
                                </td>
                                <td className=" py-8 hidden md:table-cell">
                                    <ColumnBody column={dataclient.Department} border={true} index={3}/>
                                    
                                </td>

                                <td className=" border-none py-8 hidden md:table-cell ">
                                    <ColumnBody column={dataclient.Status}  border={false} index={4}/>
                             
                                </td>
                                <td className=" py-8 flex-1">
                                    <button className="border-menu-color/20 border rounded" >
                                        <img src='https://users-table-demo-app.vercel.app/icn_eye.svg' alt='Logo' className=" p-1 w-8"/>
                                        
                                    </button>
                                </td>
                            </tr>
                        )) : <div></div>}
                    
                </tbody>
            </table>
            
        </div>
        
    );
}
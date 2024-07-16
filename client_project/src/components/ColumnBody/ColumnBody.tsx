import React, { FunctionComponent } from 'react';
import { propBody } from '../../types/types';


export const ColumnBody: FunctionComponent<propBody> =(props) => {
    const {column, border, index} = props
    return (
        
        <div className={` px-4 ${border === false ? '' : 'border-r-2 border-menu-color/20'}
            ${(index===1) ? 'md:border-r-2 md:border-menu-color/20' :''}
            ${column === 'Activity' ? 'before:content-[""] before:w-2.5 before:h-2.5 before:inline-block before:rounded-full before:mr-2 before:bg-black' : ''}
            `}>
            {column}
            
        </div>                       
  
    );
}
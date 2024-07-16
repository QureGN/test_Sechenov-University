import React, { FunctionComponent, } from 'react';
import {useSelector, } from "react-redux";
import { useAppDispatch } from '../../store/hooks';
import { RootState } from '../../store/types';
import { setStateForSort, setStateForSortDirection, setStateActiveColumn } from '../../store/reducer';
import { dataHeader,  } from '../../types/types';
import { ColumnName } from '../../const/const';

export const HeaderTable: FunctionComponent<dataHeader> =(props) => {

    const {header, index} = props
   
    const dispatch = useAppDispatch()
    const stateForSortDirection = useSelector((state: RootState) => state.clients.stateForSortDirection)
    const stateActiveColumn = useSelector((state: RootState) => state.clients.stateActiveColumn)

    const handleChange = (columnIndex: number) => {
        
      if (columnIndex === stateActiveColumn) {
        // Если нажата та же колонка, увеличиваем sortValue
        if (stateForSortDirection >= 2) {
          dispatch(setStateForSortDirection(0))
          dispatch(setStateForSort(''))
        } else {
          dispatch(setStateForSortDirection(stateForSortDirection + 1))
          dispatch(setStateForSort(ColumnName[columnIndex].accessor))
        }
      } else {
        // Если нажата другая колонка, sortValue становится 1
        dispatch(setStateForSortDirection(1))
        dispatch(setStateActiveColumn(columnIndex))

        dispatch(setStateForSort(ColumnName[columnIndex].accessor))
      }
      
    };

    return (
      <div>
        <div className={` md:block cursor-pointer px-4 ${(index===4) || (index===1) ? '' : 'border-r-2 border-menu-color/20'}
        ${ (index===1) ? 'md:border-r-2 md:border-menu-color/20' :'' }
        `}
         onClick={() => handleChange(index)}> {header}
          {index === stateActiveColumn && (
            <span className=" ml-2">
              {stateForSortDirection === 1 ? '🔼' : stateForSortDirection === 2 ? '🔽' : ''}
            </span>
          )}
                            
        </div>
      </div>
        
    );
}
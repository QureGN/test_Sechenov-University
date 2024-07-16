import { createSlice} from "@reduxjs/toolkit";

interface SortState {
    sortName: string | null;
    sortDirection: number | null;
    stateActiveColumn: null;
  }

const clientSlice = createSlice({
    name:'clients',
    initialState:{
        client: [
            {
            id: '',
            Name: '',
            Sex: '',
            Department: '',
            Status: ''
            }
        ],
        stateForSort: '',
        stateForSortDirection: 0,
        stateActiveColumn: null,
        

        
        
    },
    reducers: {
        setClients: (state, action) => {
            state.client=action.payload
        },

        setStateForSort: (state, action) => {
            state.stateForSort=action.payload
        },
        setStateForSortDirection: (state, action) => {
            state.stateForSortDirection=action.payload
        },
        setStateActiveColumn: (state, action) => {
            state.stateActiveColumn=action.payload
        },
        setStateNewClient: (state, action) => {
            state.client=[...state.client,action.payload]
        },
    }
}
);

export const {setClients, setStateForSort, setStateForSortDirection, setStateActiveColumn, setStateNewClient} = clientSlice.actions;
export default clientSlice.reducer;
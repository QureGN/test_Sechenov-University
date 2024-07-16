export interface Column{
    name: string,
    accessor: string
}

export interface DataTable{
    id: string,
    Name: string,
    Sex: string,
    Department: string,
    Status: string
}

export interface dataHeader{
    header: string,
    index:number
}

export interface propBody{
    column:string,
    border: boolean,
    index: number
   
}

export interface DataTableComponentsProps {
    allClient: DataTable[],
    search: string
}
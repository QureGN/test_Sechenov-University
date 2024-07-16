import { Column } from "../types/types"

export const jsonPatient = [
    {
        Name: "Demo Patient F",
        Sex: "Male",
        Department: "1st cardiology",
        Status: "Inactive"
    },
    {
        Name: "Demo Patient E",
        Sex: "Female",
        Department: "1st endocrinology",
        Status: "Activity"
    }
]


export const ColumnName: Column[]=[
    {
       name: "#",
       accessor: "id"
    },
    {
       name: "Name",
       accessor: "Name"
    },
    {
       name: "Sex",
       accessor: "Sex"
    },
    {
       name: "Department",
       accessor: "Department"
    },
    {
       name: "Status",
       accessor: "Status"
    },
   ]

export enum ColumnNames {
    Name = 'Name',
    Sex = 'Sex',
    Department = 'Department',
    Status = 'Status'
  }
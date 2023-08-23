// Create a model/interface for the JSON data
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Fetch the JSON data
const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: Post[] = await response.json();
  return data;
};


import React, { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import Tree from './tree';

const SecondPageComponent1: React.FC = () => {
  const [data, setData] = useState<Post[]>([]);

  useEffect(() => {
    fetchData().then((fetchedData) => {
      setData(fetchedData);
    });
  }, []);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'title', headerName: 'Title', width: 300 },
    { field: 'body', headerName: 'Body', width: 600 },
  ];

  return (
    <div style={{ height: 400, width: '100%',}}>
      <DataGrid rows={data}  columns={columns} checkboxSelection />
      <h1 style={{color:'black'}}>Scroll down for Department Component</h1>
      <Tree/>
    </div>

    
  );
};

export default SecondPageComponent1;

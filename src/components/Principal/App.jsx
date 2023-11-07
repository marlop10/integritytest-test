import React from 'react';
import DataTable from '../Table/DataTable.jsx';
import '../css/generalStyles.css';
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Login from '../Login/Login.jsx';



function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>} />
        <Route path="/DataTable" element={<DataTable/>} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;

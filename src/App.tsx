import React from 'react';
import Layout from "./UI/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Dishes from "./features/Dishes/Dishes";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={(<Dishes/>)}/>
      </Routes>
    </Layout>
  );
}

export default App;

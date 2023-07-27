import React from 'react';
import Layout from "./UI/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import Dishes from "./features/Dishes/Dishes";
import NewDish from "./containers/NewDish/NewDish";
import EditDish from "./containers/EditDish/EditDish";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path='/' element={(<Dishes/>)}/>
        <Route path='/dishes' element={(<Dishes/>)}/>
        <Route path='/new-dish' element={(<NewDish/>)}/>
        <Route path='/edit-dish' element={(<EditDish/>)}/>
      </Routes>
    </Layout>
  );
}

export default App;

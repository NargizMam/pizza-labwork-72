import React from 'react';
import Layout from "./UI/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import NewDish from "./containers/NewDish/NewDish";
import EditDish from "./containers/EditDish/EditDish";
import Orders from "./features/Orders/Orders";
import Client from "./containers/Client/Client";
import AdminPage from "./containers/AdminPage/AdminPage";


function App() {
  return (
    <Layout>
      <Routes>
          <Route path='/' element={<Client/>}/>
          <Route path='/admin' element={<AdminPage/>}/>
          <Route path='/admin/dishes' element={<AdminPage/>}/>
          <Route path='admin/new-dish' element={<NewDish/>}/>
          <Route path='/edit-dish/:id' element={<EditDish/>}/>
          <Route path='admin/orders' element={<Orders/>}/>
          <Route path='/orders' element={<Orders/>}/>
      </Routes>
    </Layout>
  );
}

export default App;

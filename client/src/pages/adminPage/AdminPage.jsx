import React from 'react'
import { Link } from 'react-router-dom';
import './adminPage.css';
import AdminMainList from '../../components/accountComponents/adminMainList/AdminMainList'

const AdminPage = () => {
  return (
    <div className='admin-page'>
      {/* <Link to={"/productlist"}>Product List</Link> */}

      <AdminMainList />
    </div>
  )
}

export default AdminPage

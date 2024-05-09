import React, { useEffect, useState } from 'react'
import {AdminHead, UserHead} from '../Header'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'
const Laout = () => {

  const [isAdmin, setIsAdmin]=useState(false);

  useEffect(() => {
    const fetchIsAdminData= async()=>{
      try {
        let role = sessionStorage.getItem('IsAdmin')
        setIsAdmin(role)
        //console.log('isAdmin',isAdmin)
      } catch (error) {
        console.error('Error fetching isAdmin data:', error);
      }
    };
    fetchIsAdminData();
  },[])

  return (
    <>
    {isAdmin==='true'?<AdminHead/>:<UserHead/>}
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Laout
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TopBar from '../../Home/AppBar';
import './Style.css'
import {addProducts} from '../../../Redux/Slices/productSlice'
import List from '../../Home/List/List';
import ListItem from '../../Home/List/ListItems';
const HomePege = () => {
  const dispatch =useDispatch()
    //const [products ,setProucts] =useState<any>([])

    const getProduct = async ()=>{
       const response = await axios.get('http://localhost:4000/products')
       console.log(response,"@@@")
       dispatch(addProducts(response.data))
    }
useEffect(()=>{
    getProduct()
},[])
    return (
        <div className='home'>
  
        <TopBar />
        <div className='home_panelList-wrap'>
       
          <div className='home_panel-wrap'>
           
          </div>
          {/* List & Empty View */}
          <div className='home_list-wrap'>
            <ListItem/>
          </div>
        </div>
      </div>
    );
};

export default HomePege;



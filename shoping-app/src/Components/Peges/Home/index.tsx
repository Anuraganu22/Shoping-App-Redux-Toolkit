import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TopBar from '../../Home/AppBar';
import './Style.css'
import { addProducts,brandFilter } from '../../../Redux/Slices/productSlice'
import List from '../../Home/List';
import Filter from '../../Home/Filter';
import productContext from '../../../Context/productContext'

const HomePege = () => {
  const dispatch = useDispatch()
  const [products ,setProucts] =useState<any>([])

  const getProduct = async () => {
    const response = await axios.get('http://localhost:4000/products')
    console.log(response, "@@@")
    setProucts(response.data)
    dispatch(addProducts(response.data))
  }
  useEffect(() => {
    getProduct()
  }, [])

/* Filter */

  const filter = (selectedValue: any) => {
    if (selectedValue) {
      const brand = products.filter((item: any) => {
        const isPresent = selectedValue.some((value: any) => {
          return value.pro_Brand === item.pro_Brand
        })
        return isPresent
      })
      dispatch(brandFilter(brand))
      console.log(brand, "MY BRAND..?")
    }
  }

  return (
    <div>
    <productContext.Provider value={{ filter}}>
      <div className='home'>
        {/* App Bar */}
        <TopBar />
        <div className='home_panelList-wrap'>
          {/* Filter */}
          <div className='home_panel-wrap'>
            <Filter />
          </div>
          {/* List & Empty View */}
          <div className='home_list-wrap'>
            <List />
          </div>
        </div>
      </div>
    </productContext.Provider>
  </div>
)
}

export default HomePege;



import React, { useCallback, useState } from 'react'
import Select from 'react-select'
import { useContext } from 'react';
//import productContext from '../../../../Context/productContext';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { getAllproducts } from '../../../Redux/Slices/productSlice';
import './Style.css'
import productContext from '../../../Context/productContext';
type Props = {}
const MultiSelect = (props: Props) => {
    const { products } = useSelector(getAllproducts);
    const { filter } = useContext(productContext);
    const [selectedValue, SetSelectedValue] = useState<any>([])
    console.log(products,"MY FILTER DATA....")
    let mylist = products;
const filteredOptions = React.useCallback(() => {
    const list: any = [];
    mylist.forEach((item: any) => {
      if (list.findIndex((el: any) => el.value === item.pro_Brand_id) === -1) {
        list.push({ ...item, label: item.pro_Brand, value: item.pro_Brand_id })
      }
    })
    return list;
  }, [mylist])
  
  return (           
    < >
      <div className='filterlabel'> select your Brand..! </div>
      <div className='selectfilter'>
      <Select options={filteredOptions()}
       onChange={SetSelectedValue}
         isMulti />
      </div>
    
      <div className='button'>
         <Button variant="contained" onClick={()=>filter(selectedValue)}>Filter</Button>
      </div>
    </>
  )
}
export default MultiSelect




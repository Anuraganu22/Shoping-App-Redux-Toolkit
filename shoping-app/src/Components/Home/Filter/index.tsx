import { Button } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { getAllproducts } from '../../../Redux/Slices/productSlice'
import MultiSelect from '../../Common/MultiSelect'
//import './Style.css'
type Props = {}

const Filter = (props: Props) => {
    const { products } = useSelector(getAllproducts);
    console.log(products,"Hai...")
  return (
    <>
      <div className='input-group'>
        <div>
          <MultiSelect/>
        </div>
        <div className='label-text'>select your Price range....!</div>
        <div className='slider-part'>
          
        </div>
      </div>
    </>



  )
}

export default Filter
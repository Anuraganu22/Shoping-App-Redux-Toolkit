import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { getAllproducts } from '../../../../Redux/Slices/productSlice';
type Props = {}

const ListItem = (props: Props) => {
    const {products} =useSelector(getAllproducts);
   console.log(products,"MY PRODUCTS")
  return (
    <>
    {
        products.map((item:any)=> {
            return <Card sx={{ maxWidth:300 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="150"
                image={item.pro_image}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                {item.pro_name} 
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000 
                </Typography>
                <div className='brand'>
                {item.pro_Brand}
                </div>
                <div className='price'>
                {item.pro_price}/-₹
                </div>
              </CardContent>
            </CardActionArea>
          </Card>
        })
    }   
     
    </>
  )
}
export default ListItem
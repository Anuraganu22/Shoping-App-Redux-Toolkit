import React, { useContext } from 'react'
import ListItem from './ListItems'
import './Style.css'

type Props = {}
const List = (props: Props) => {
  return (
    <div className='list-wrap'>
      <ListItem />
    </div>
  )
}
export default List
import React from 'react';
import './list.css';
import { Sidebar, Navbar, Datatable } from '../../components';

type Props = {}

const List = (props: Props) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <Datatable />
      </div>
    </div>
  )
}

export default List;
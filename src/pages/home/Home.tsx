import React from 'react';
import { 
  Navbar, 
  Sidebar, 
  Widget, 
  Featured, 
  Chart,
  Table
} from '../../components';
import './home.css';

type Props = {}

const Home = (props: Props) => {
  return (
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <div className="homeWidgets">
            <Widget type="users" />
            <Widget type="products" />
            <Widget type="orders" />
            <Widget type="stats" />
          </div>

          <div className="homeCharts">
            <Featured />
            <Chart title="Revenue: Previous 6 Months" aspect={2/1} />
          </div>
          <div className="homeListContainer">
            <div className="listTitle">Latest Sales</div>
            <Table />
          </div>
        </div>
      </div>
  )
}

export default Home
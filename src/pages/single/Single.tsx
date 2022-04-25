import React from 'react';
import './single.css'; 
import {
  Sidebar,
  Navbar,
  Chart,
  Table
} from '../../components';

type Props = {}

const Single = (props: Props) => {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="singleTop">
          <div className="singleTopLeft">
            <div className="editButton">Edit</div>
            <h1 className="singleTopTitle">Information</h1>
            <div className="singleItem">
              <img 
                src="https://images.pexels.com/photos/3283568/pexels-photo-3283568.jpeg?cs=srgb&dl=pexels-roy-reyna-3283568.jpg&fm=jpg" 
                alt="" 
                className="itemImg" 
              />
              <div className="singleDetails">
                <h1 className="singleItemTitle">Jane Doe</h1>
                <div className="singleDetailItem">
                  <span className="singleItemKey">Email:</span>
                  <span className="singleItemValue">janedoe@gmail.com</span>
                </div>
                <div className="singleDetailItem">
                  <span className="singleItemKey">Phone:</span>
                  <span className="singleItemValue">+44 1234 567890</span>
                </div>
                <div className="singleDetailItem">
                  <span className="singleItemKey">Address:</span>
                  <span className="singleItemValue">Some Place, Over The Rainbow, AB0 0AB</span>
                </div>
                <div className="singleDetailItem">
                  <span className="singleItemKey">Country:</span>
                  <span className="singleItemValue">UK</span>
                </div>
              </div>
            </div>
          </div>
          <div className="singleTopRight">
            <Chart title="Usage (Previous 6 months)" aspect={3/1}/>
          </div>
        </div>
        <div className="singleBottom">
          <h1 className="singleTopTitleRight">Last usage</h1>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default Single
import React, { useState, ChangeEvent } from 'react';
import './new.css';
import {
  Sidebar,
  Navbar
} from '../../components';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';

type Props = {
  title: string,
  inputs: any,
  // file: string,
  // onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const New = (props: Props) => {
  const [file, setFile] = useState("");
  
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="newTop">
          <h1 className="newTopTitle">
            {props.title}
          </h1>
        </div>
        <div className="newBottom">
          <div className="newBottomLeft">
            <img 
              className="newBottomImg"
              src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              // src={file ? URL.createObjectURL(file) : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"} 
              alt="" 
            />
          </div> 
          <div className="newBottomRight">
            <form action="">
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="newBottomRightIcon" />
                </label>
                <input 
                  // onChange={e => setFile(e.ChangeEvent.setFile(<HTMLInputElement>e.target).files[0])} 
                  type="file" 
                  id="file" 
                  style={{ display: 'none' }} 
                />
              </div>

              {props.inputs.map((input: any) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder} />
              </div>
              ))}

              <button className="AddUser">Add new</button>
            </form>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default New
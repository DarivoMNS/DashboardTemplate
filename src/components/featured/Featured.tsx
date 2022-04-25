import React from 'react';
import './featured.css';
import { 
  CircularProgressbar,
  buildStyles
} from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';

type Props = {}

const Featured = (props: Props) => {
  return (
    <div className="featured">
      <div className="featureTop">
        <h1 className="featureTitle">Total Revenue</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="featureBottom">
        <div className="featureChart">
          <CircularProgressbar 
            value={84} 
            text="84%" 
            strokeWidth={5}
            styles={buildStyles({
              textColor: "green",
              pathColor: "green",
            })}
          />
        </div>
        <p className="featureTitleText">
          Total sales made today
        </p>
        <p className="featureAmount">
          £430,000
        </p>
        <p className="featureDesc">
          Previous transaction processing.
        </p>
        <div className="featureSummary">
          <div className="featureSummaryItem">
            <div className="itemTitle">Day</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className="resultAmount">£800,000</div>
            </div>
          </div>
          <div className="featureSummaryItem">
            <div className="itemTitle">Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize='small' />
              <div className="resultAmount">£800,000</div>
            </div>
          </div>
          <div className="featureSummaryItem">
            <div className="itemTitle">Month</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize='small' />
              <div className="resultAmount">£800,000</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
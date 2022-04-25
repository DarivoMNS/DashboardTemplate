import React from 'react';
import './chartsPage.css';
import { 
  Sidebar, 
  Navbar, 
  BarChartComp, 
  PieChartComp,
  AreaFill 
} from '../../components';

type Props = {}

const ChartsPage = (props: Props) => {
  return (
    <div className="chartsPage">
        <Sidebar />
        <div className="chartsContainer">
            <Navbar />
            <div className="chartsArea">
                <BarChartComp title="Bar Chart" aspect={2/1} />
                <PieChartComp title="Pie Chart" aspect={2/2} />
                <AreaFill title="Area Chart" />
            </div>
        </div>
    </div>
  )
}

export default ChartsPage;
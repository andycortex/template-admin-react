import React from 'react';
import Featured from '../../components/featured/Featured';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import Statistics from '../../components/statistics/Statistics';
import Widget from '../../components/widget/Widget';
import TableInfo from '../../components/table/TableInfo';
import './home.scss';

const Home = () => {
  return (
    <div className="home">
      <Sidebar/>
        <div className="homeContainer">
          <Navbar />
            <div className="widgets">
              <Widget type="users"/>
              <Widget type="order"/>
              <Widget type="earning"/>
              <Widget type="balance"/>
            </div>
            <div className="charts">
              <Featured/>
              <Statistics/>
            </div>
            <div className="listContainer">
                <div className="listTitle">Lastest Transactions</div>
                <TableInfo/>
            </div>
        </div>
    </div>
  )
}

export default Home
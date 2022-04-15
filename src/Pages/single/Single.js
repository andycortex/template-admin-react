import React from 'react';
import './single.scss'

const Single = () => {
  return (
    <div className="single">
        <h1>Sidebar</h1>
        <div className="singleContainer">
            <div className="top">
                <div className="left">
                    <div className="editButton">Edit</div>
                    <h1 className="title">Informations</h1>
                    <div className="item">
                        <img src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt='' className="itemImg"/>
                        <div className="details">
                            <h1 className="itemTitle">Andrea Cortez</h1>
                            <div className="detailItem">
                                <span className="itemKey">Email:</span>
                                <span className="itemValue">cortex.andy2809@gmail.com</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Phone:</span>
                                <span className="itemValue">+591 72975154</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Address:</span>
                                <span className="itemValue">Calle 6 Barrio Fabril</span>
                            </div>
                            <div className="detailItem">
                                <span className="itemKey">Country:</span>
                                <span className="itemValue">Bolivia</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <h1>Charts</h1>
                </div>
            </div>
            <div className="bottom">
                <h1 className="title"> Last Transactions</h1>
                <h2>List</h2>
            </div>
        </div>
    </div>
  )
}

export default Single
import React from 'react';
import './new.scss'

const New = () => {
  return (
    <div className="new">
        <h1>Sidebar</h1>
        <div className="newContainer">
          <h1>Navbar</h1>
          <div className="top">
            <h1>Titles</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" />
            </div>
            <div className="right">
              <form>
                <div className="formInput">
                  <label htmlFr="file">
                    Image: alguna vaina viene aqui
                  </label>
                  <input type="file" id="file" name="file" style={{ display: 'none' }}/>
                </div>
                <div className="formInput">
                  <label>Titles</label>
                  <input type="text" placeholder="Here write something"/>
                </div>
                <button>Send</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default New
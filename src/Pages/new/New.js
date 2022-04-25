import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Sidebar from '../../components/sidebar/Sidebar';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import './new.scss';
import { 
  doc, 
  serverTimestamp, 
  setDoc 
} from "firebase/firestore";
import { auth, db, storage } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const New = ({ inputs, title }) => {
  const [file, setFile] = useState('');
  const [data, setData] = useState({});
  const [per, setPer] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const uploadFile = () => {
      // const name = new Date().getTime()+file.name;
      
      const storageRef = ref(storage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPer(progress);
          switch (snapshot.state) {
            case 'paused':
              console.log('upload is paused');
              break;
            case 'running':
              console.log('upload is running');
              break;
            default:
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setData((prev) => ({ ...prev, img: downloadURL }))
          });
        }
      );
    };
    file && uploadFile();
  }, [file])

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({...data, [id]: value });
  };
  

  const handlerAddRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      await setDoc(doc(db, "users", res.user.uid), {
        ...data,
        timeStamp : serverTimestamp(),
      });
      navigate(-1);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="new">
        <Sidebar/>
        <div className="newContainer">
          <Navbar/>
          <div className="top">
            <h1>{ title }</h1>
          </div>
          <div className="bottom">
            <div className="left">
              <img src={
                file
                ? URL.createObjectURL(file)
                : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
               alt="" />
            </div>
            <div className="right">
              <form onSubmit={handlerAddRegister}>
                <div className="formInput">
                  <label htmlFor="file">
                    Image: <DriveFolderUploadOutlinedIcon className="icon"/>
                  </label>
                  <input 
                    type="file" 
                    id="file" 
                    onChange={(e) => setFile(e.target.files[0])}
                    name="file" 
                    style={{ display: 'none' }}/>
                </div>
                {inputs.map((input) =>(
                  <div className="formInput" key={input.id}>
                    <label>{input.label}</label>
                    <input 
                      id={input.id}
                      autoComplete="off"
                      type={ input.type } 
                      placeholder={ input.placeholder }
                      onChange={ handleInput }
                      required={ input.required}
                    />
                  </div>
                ))}
                <button disabled={ per !== null && per < 100 } type="submit">Send</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default New
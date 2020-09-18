import React, { useState, useEffect } from "react";
import axios from "axios";
import { axiosWithAuth } from './util/AxiosWithAuth';
import { useLocation, useParams, useHistory } from "react-router-dom";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const location = useLocation();

  useEffect(()=>{
    axiosWithAuth().get("http://localhost:5000/api/colors")
    .then(res => {
      setColorList(res.data)
        console.log(res)
    })
    .catch(err => console.log(err,'error'))
}, [location])


  return (
    <>
    <h1> My Color List</h1>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;

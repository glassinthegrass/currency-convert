import  { useState, useEffect } from "react";
import axios from "axios";
export const useAxios = (request) => {
  const [loading, setLoading] = useState(true);
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [toggle, setToggle] = useState(true);

  const axiosRequest = async(axiosReq) => {      
    const {method,url}=axiosReq
    try {
              const currency = await axios[method](url).then((res) => res.data);
                    setResponse(currency);
            } catch (err) {
                setError(err.response.data.message);
            }finally{
              setToggle(false)
              setLoading(false);
            }
        }

        const handleRefresh=()=>{
            setToggle(true)
        }
  
  useEffect(()=>{
    if(request){
        axiosRequest(request);

    } 
  },[toggle,request])
return [{loading,response,error},handleRefresh]
};

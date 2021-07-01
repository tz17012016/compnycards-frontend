import { API_URL, doApiMethod } from "./apiSer"

export const checkIfUser = async() => {
  if(!localStorage["tok"]){
    return {err:"No token in localstorage"}
  }
  try{
    let url = API_URL+"/users/authUser";
    let data = await doApiMethod(url,"GET");
    return data;
  }
  catch(err){
    return err;
  }
}
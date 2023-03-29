import { redirect } from "react-router-dom"
import api from "../api/Api"


export const updateProduct = async (data) => {
    console.log(data)
    try{
        await api.put(`/productos/update/${data._id}`, data)
        
        return true
    }catch(error){
        console.log(error)

    }
}
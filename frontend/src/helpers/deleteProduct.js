import { redirect } from "react-router-dom"
import api from "../api/Api"


export const deleteProduct = async (id) => {
    try {
        await api.delete(`/productos/delete/${id}`)
        return true
    }
    catch (error) {
        console.log(error)
    }
}
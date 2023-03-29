import axios from "axios";
import api from "../api/Api";

export const postCreateProduct = async (product) => {
    const response = await api.post("/productos/create", product);
    return response.data;
    }

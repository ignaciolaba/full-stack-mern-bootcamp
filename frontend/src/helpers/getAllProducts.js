import axios from 'axios';
import api from '../api/Api';


export const getAllProducts = async () => {
    try {
        const response = await api.get(`productos/`);
        return await response.data;
    } catch (error) {
        console.log(error);
    }
    }
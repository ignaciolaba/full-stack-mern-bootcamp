import api from '../api/Api';

export const getOneProducto = async (id) => {
    try {
        const response = await api.get(`/productos/${id}`)
        return await response.data
    }   catch (error) {
        console.log(error)
    }
}

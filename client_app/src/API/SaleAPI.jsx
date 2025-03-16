import axiosClient from './axiosClient'

const SaleAPI = {

    getList: () => {
        const url = `/sale/list/product`
        return axiosClient.get(url)
    },

    checkSale: (id) => {
        const url = `/sale/list/${id}`
        return axiosClient.get(url)
    }

}

export default SaleAPI
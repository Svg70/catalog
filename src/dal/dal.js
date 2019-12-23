import * as axios from "axios";




const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://localhost:4000',
    // headers:{"Content-Type": "application/json"}
})



export const dal = {
    getItems() {
        return instance.get(`/catalogitems`)
    },
    changeDataBaseCeil( nominal, number, common, varieties){
        return instance.put(`/catalogitems/1/nominals/${nominal}/director/${number}`, { common: common,varieties:varieties, status: true  },)
    }
}
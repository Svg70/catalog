import * as axios from "axios";




const instance = axios.create({
    withCredentials: true,
    // baseURL: 'http://localhost:5000',
    headers:{"Content-Type": "application/json"},
    
})



export const dal = {
    getItems() {
        return instance.get(`/catalog`)
    },
    changeDataBaseCeil( nominal, number, common, varieties){
        return instance.put(`/catalog/1/nominals/${nominal}/director/${number}`, { common: common,varieties:varieties, status: true  },)
    }
}


export const RegisterAPI = {
    registerMe (email, password, name, surname, patronic, telephone) {
        return instance.post('/auth/register', {email, password, name, surname, patronic, telephone})
    }
}

export const LoginAPI = {
    loginMe (email, password){
        return instance.post('/auth/login', {email, password})
    }
}

export const TableAPI = {
    
    changeDescriptionCells(id, year, nominal, number, common,varieties,astimation,kassirInfo,sourses){

        return instance.put(`/catalog/kasssir/${id}/year/${year}/nominal/${nominal}/number/${number}`, { common,varieties,astimation,kassirInfo,sourses  })
    },
    changeDescriptionPhotos(id, year, nominal, number, photo1, photo2){
        return instance.put(`/catalog/kasssir/${id}/year/${year}/nominal/${nominal}/number/${number}`, { photo1, photo2 })
    }
}
import * as axios from "axios";



//для переключения сменить комментированные строки и убрать 'Access-Control-Allow-Origin':'*'
const instance = axios.create({
    withCredentials: false,
    // withCredentials: false,
    baseURL: 'https://serene-cliffs-91865.herokuapp.com',
    // baseURL: 'http://localhost:80',
    headers:{"Content-Type": "application/json",
    'Access-Control-Allow-Origin':'*'},
    
})



export const dal = {
    getItems(table) {
        return instance.get(`/catalog/${table}`)
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
    
    changeDescriptionCells(id, year, nominal, number, common,varieties,astimation,kassirInfo,sourses, status, photo1, photo2){
        return instance.put(`/catalog/kassir/${id}/year/${year}/nominal/${nominal}/number/${number}`, { common,varieties,astimation,kassirInfo,sourses,status,photo1, photo2  })
    },
    changeDescriptionPhotos(id, year, nominal, number, photo1, photo2){
        return instance.put(`/catalog/kassir/${id}/year/${year}/nominal/${nominal}/number/${number}`, { photo1, photo2 })
    }

}

export const NumbersEditingAPI = {
    
    numberEdit(id, year, nominal, number, itemNumber, itemNumberInfo, itemNumberPhoto1, itemNumberPhoto2 ){
        return instance.put(`/catalog/kassir/${id}/year/${year}/nominal/${nominal}/number/${number}/addnum`, {itemNumber, itemNumberInfo, itemNumberPhoto1, itemNumberPhoto2 })
    },
    numberDelete(id, year, nominal, number, itemNumber ){
        return instance.put(`/catalog/kassir/${id}/year/${year}/nominal/${nominal}/number/${number}/delnum`, { itemNumber })
    }

}
export const ApplicationsAPI = {
    makeNewApplication(name,  description, photo1, photo2, photo3){
        debugger
        return instance.post(`/applications/new`, {name,  description, photo1, photo2, photo3})
    }
}
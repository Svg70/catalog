import { dal } from "../dal/dal"

const SET_CATALOG_LIST = 'SET_CATALOG_LIST'
const IS_LOADING = 'IS_LOADING'
const SET_AUTH = 'SET_AUTH'



let initialstate = {
    adminIsAuth: false,
    userName: 'Admin',

    preloader: false,
    
        catalogItems: [
            {
                id: 1,
                kassir: 'Веселовский',
                consistOf: [1, 3, 5, 10, 25, 50, 100, 1, 3, 5, 10, 25, 50, 1, 3, 5],
                nominals: [
                    {
                        nominal: 1,
                        state: [
                            {
                                number: 1,
                                status: true, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: true, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее ос',
                                    varieties: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику,',
                                    numbers: 'Сайт рыбатекст поможет дизайнеру, верстальщику,',
                                    astimation: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать ',
                                    akassirInfo: 'Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерироватьСайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать',
                                    sourses: 'fox-notes'
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    },
                    {
                        nominal: 3,
                        state: [
                            {
                                number: 1,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: true, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    },
                    {
                        nominal: 5,
                        state: [
                            {
                                number: 1,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    },
                    {
                        nominal: 10,
                        state: [
                            {
                                number: 1,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    },
                    {
                        nominal: 25,
                        state: [
                            {
                                number: 1,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    },
                    {
                        nominal: 50,
                        state: [
                            {
                                number: 1,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    },
                    {
                        nominal: 100,
                        state: [
                            {
                                number: 1,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1, year: 1855,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    },
                    {
                        nominal: 1,
                        state: [
                            {
                                number: 1,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    },
                    {
                        nominal: 3,
                        state: [
                            {
                                number: 1,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    },
                    {
                        nominal: 5,
                        state: [
                            {
                                number: 1,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    },
                    {
                        nominal: 10,
                        state: [
                            {
                                number: 1,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    },
                    {
                        nominal: 25,
                        state: [
                            {
                                number: 1,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    },
                    {
                        nominal: 50,
                        state: [
                            {
                                number: 1,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1856,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    },
                    {
                        nominal: 1,
                        state: [
                            {
                                number: 1,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    },
                    {
                        nominal: 3,
                        state: [
                            {
                                number: 1,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    },
                    {
                        nominal: 5,
                        state: [
                            {
                                number: 1,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Владимирцов', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 2,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Лазарев', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 3,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Поморский', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 4,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Стоянов', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 5,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Чухломин', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                            {
                                number: 6,
                                status: false, description: {
                                    upravl: 'Ростовцев', kassir: 'Веселовский', director: 'Щерба', nominal: 1, year: 1857,
                                    photos: { photo1: null, photo2: null },
                                    common: '',
                                    varieties: ' ',
                                    numbers: '',
                                    astimation: '',
                                    akassirInfo: '',
                                    sourses: ''
                                }
                            },
                        ]
                    }
                ]
            }
        ]
    ,

}

let AdminCatalogReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SET_CATALOG_LIST: {

            let stateCopy = {...state, catalogItems: action.response.data}
            return stateCopy
        }
        case IS_LOADING: {
            let stateCopy = {...state, preloader: action.loadingStatus}
            return stateCopy
        }
        case SET_AUTH: {
            let stateCopy = {...state, adminIsAuth: action.loginStatus}
            return stateCopy
        }
        default:
            return state
    }
}

const setCatalogList = (response) => {

    return { type: SET_CATALOG_LIST,  response}
}

const isLoading = (loadingStatus) => {
    return { type: IS_LOADING, loadingStatus }
}

export const setAuth = (loginStatus) => {
    debugger
    return { type: SET_AUTH, loginStatus}
}



export const getCatalogList = () =>{
    return (dispatch) =>{
        dispatch(isLoading(true))
        dal.getItems().then(response =>{
            dispatch(setCatalogList(response),
            dispatch(isLoading(false))     )
            }
        )
    }
}


export const changeDataBaseCeilInfo = ( nominal, number, common, varieties ) =>
    async(dispatch) =>{
        await dal.changeDataBaseCeil( nominal, number, common, varieties)
        console.log('change in dataBase made')
        // dal.getItems().then(dispatch(getCatalogList()))
    }


export default AdminCatalogReducer
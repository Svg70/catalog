import { dal, TableAPI } from "../dal/dal"



const SET_CATALOG_LIST = 'SET_CATALOG_LIST'
const IS_LOADING = 'IS_LOADING'
const SET_AUTH = 'SET_AUTH'



let initialstate = {

    preloader: false,

    catalogItems: [
        {
            "id": 1,
            "kassir": "Веселовский",
            "row": [
                {
                    "year": 1855,
                    "nominals": [
                        {
                            "nominal": 1,
                            "state": [
                                {
                                    "status": true,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 1,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            },
                                            
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            },
                                            
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            },
                                            
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            },
                                            
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            },
                                            
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        },
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            },
                                            
                                        }
                                    ],
                                    "astimation": "retbr",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 1,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 1,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 1,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 1,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 1,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                }
                            ]
                        },
                        {
                            "nominal": 3,
                            "state": [
                                {
                                    "status": true,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 3,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "https://c.radikal.ru/c01/1912/65/b9548878cde0.jpg",
                                        "photo2": "https://d.radikal.ru/d28/1912/8a/c8e478a51674.jpg"
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "photos": {
                                                "photos": {
                                                    "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                    "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                    "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                                },
                                                "info": "Найден между створками старинного стекла"
                                            }
                                        }
                                    ],
                                    "astimation": "retbr",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 3,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 3,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 3,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 3,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 3,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                }
                            ]
                        },
                        {
                            "nominal": 5,
                            "state": [
                                {
                                    "status": true,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 5,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "https://c.radikal.ru/c01/1912/65/b9548878cde0.jpg",
                                        "photo2": "https://d.radikal.ru/d28/1912/8a/c8e478a51674.jpg"
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "photos": {
                                                "photos": {
                                                    "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                    "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                    "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                                },
                                                "info": "Найден между створками старинного стекла"
                                            }
                                        }
                                    ],
                                    "astimation": "retbr",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 5,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 5,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 5,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 5,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 5,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                }
                            ]
                        },
                        {
                            "nominal": 10,
                            "state": [
                                {
                                    "status": true,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 10,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "https://c.radikal.ru/c01/1912/65/b9548878cde0.jpg",
                                        "photo2": "https://d.radikal.ru/d28/1912/8a/c8e478a51674.jpg"
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "photos": {
                                                "photos": {
                                                    "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                    "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                    "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                                },
                                                "info": "Найден между створками старинного стекла"
                                            }
                                        }
                                    ],
                                    "astimation": "retbr",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 10,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 10,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 10,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 10,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 10,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                }
                            ]
                        },
                        {
                            "nominal": 25,
                            "state": [
                                {
                                    "status": true,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 25,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "https://c.radikal.ru/c01/1912/65/b9548878cde0.jpg",
                                        "photo2": "https://d.radikal.ru/d28/1912/8a/c8e478a51674.jpg"
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "photos": {
                                                "photos": {
                                                    "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                    "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                    "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                                },
                                                "info": "Найден между створками старинного стекла"
                                            }
                                        }
                                    ],
                                    "astimation": "retbr",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 25,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 25,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 25,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 25,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 25,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                }
                            ]
                        },
                        {
                            "nominal": 50,
                            "state": [
                                {
                                    "status": true,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 50,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "https://c.radikal.ru/c01/1912/65/b9548878cde0.jpg",
                                        "photo2": "https://d.radikal.ru/d28/1912/8a/c8e478a51674.jpg"
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "photos": {
                                                "photos": {
                                                    "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                    "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                    "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                                },
                                                "info": "Найден между створками старинного стекла"
                                            }
                                        }
                                    ],
                                    "astimation": "retbr",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 50,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 50,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 50,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 50,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 50,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                }
                            ]
                        },
                        {
                            "nominal": 100,
                            "state": [
                                {
                                    "status": true,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 100,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "https://c.radikal.ru/c01/1912/65/b9548878cde0.jpg",
                                        "photo2": "https://d.radikal.ru/d28/1912/8a/c8e478a51674.jpg"
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "photos": {
                                                "photos": {
                                                    "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                    "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                    "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                                },
                                                "info": "Найден между створками старинного стекла"
                                            }
                                        }
                                    ],
                                    "astimation": "retbr",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 100,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 100,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 100,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 100,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 100,
                                    "year": 1855,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": null,
                                        "photo2": null
                                    },
                                    "common": "",
                                    "varieties": "",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": ""
                                }
                            ]
                        }
                    ]
                },
                {
                    "year": 1856,
                    "nominals": [
                        {
                            "nominal": 1,
                            "state": [
                                {
                                    "status": true,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 1,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "retbr",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 1,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Ерогин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 1,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 1,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 1,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 1,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 7,
                                    "nominal": 1,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                }
                            ]
                        },
                        {
                            "nominal": 3,
                            "state": [
                                {
                                    "status": true,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 3,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "retbr",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 3,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Ерогин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 3,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 3,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 3,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 3,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 7,
                                    "nominal": 3,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                }
                            ]
                        },
                        {
                            "nominal": 5,
                            "state": [
                                {
                                    "status": true,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 5,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "retbr",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 5,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Ерогин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 5,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 5,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 5,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 5,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 7,
                                    "nominal": 5,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                }
                            ]
                        },
                        {
                            "nominal": 10,
                            "state": [
                                {
                                    "status": true,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 10,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "retbr",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 10,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Ерогин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 10,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 10,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 10,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 10,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 7,
                                    "nominal": 10,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                }
                            ]
                        },
                        {
                            "nominal": 25,
                            "state": [
                                {
                                    "status": true,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 25,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 25,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Ерогин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 25,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 25,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 25,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 25,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 7,
                                    "nominal": 25,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                }
                            ]
                        },
                        {
                            "nominal": 50,
                            "state": [
                                {
                                    "status": true,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 50,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 50,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Ерогин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 50,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 50,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 50,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 50,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 7,
                                    "nominal": 50,
                                    "year": 1856,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                }
                            ]
                        }
                    ]
                },
                {
                    "year": 1857,
                    "nominals": [
                        {
                            "nominal": 1,
                            "state": [
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 1,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 1,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Ерогин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 1,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 1,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 1,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 1,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 7,
                                    "nominal": 1,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Шитц",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 8,
                                    "nominal": 1,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                }
                            ]
                        },
                        {
                            "nominal": 3,
                            "state": [
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 3,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 3,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Ерогин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 3,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 3,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 3,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 3,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 7,
                                    "nominal": 3,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Шитц",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 8,
                                    "nominal": 3,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                }
                            ]
                        },
                        {
                            "nominal": 5,
                            "state": [
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 1,
                                    "nominal": 5,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Владимирцов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "Редкая вещь",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": " Веселовский - редкий кассир",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 2,
                                    "nominal": 5,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Ерогин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 3,
                                    "nominal": 5,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Лазарев",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 4,
                                    "nominal": 5,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Поморский",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 5,
                                    "nominal": 5,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Стоянов",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 6,
                                    "nominal": 5,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Чухломин",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 7,
                                    "nominal": 5,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Шитц",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                },
                                {
                                    "status": false,
                                    "id": 1,
                                    "number": 8,
                                    "nominal": 5,
                                    "year": 1857,
                                    "upravl": "Ростовцев",
                                    "director": "Щерба",
                                    "kassir": "Веселовский",
                                    "photos": {
                                        "photo1": "",
                                        "photo2": ""
                                    },
                                    "common": "",
                                    "varieties": "разновидности",
                                    "numbers": [
                                        {
                                            "number": "12345",
                                            "info": "Найден между створками старинного стекла",
                                            "photos": {
                                                "photo1": "https://d.radikal.ru/d10/1912/b2/dbc1e78110ef.jpg",
                                                "photo2": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg",
                                                "photo3": "https://c.radikal.ru/c23/1912/4a/57531b858725.jpg"
                                            }
                                        }
                                    ],
                                    "astimation": "",
                                    "kassirInfo": "",
                                    "sourses": "fox-notes"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

let AdminCatalogReducer = (state = initialstate, action) => {
    switch (action.type) {
        case SET_CATALOG_LIST: {

            let stateCopy = { ...state, catalogItems: action.response }
            return stateCopy
        }
        case IS_LOADING: {
            let stateCopy = { ...state, preloader: action.loadingStatus }
            return stateCopy
        }
        case SET_AUTH: {
            let stateCopy = { ...state, adminIsAuth: action.loginStatus }
            return stateCopy
        }
        default:
            return state
    }
}

const setCatalogList = (response) => {

    return { type: SET_CATALOG_LIST, response }
}

const isLoading = (loadingStatus) => {
    return { type: IS_LOADING, loadingStatus }
}

export const setAuth = (loginStatus) => {
    return { type: SET_AUTH, loginStatus }
}



export const getCatalogList = () => {
    return (dispatch) => {
        dispatch(isLoading(true))
        dal.getItems().then(response => {
            dispatch(setCatalogList(response.data[0].catalogItems),
                dispatch(isLoading(false)))
        }
        )
    }
}


export const changeDataBaseCeilInfo = (nominal, number, common, varieties) =>
    async (dispatch) => {
        await dal.changeDataBaseCeil(nominal, number, common, varieties)
        console.log('change in dataBase made')
        // dal.getItems().then(dispatch(getCatalogList()))
    }

export const changeDescriptionCells = (id, year, nominal, number, common, varieties, astimation, addInfo, sourses, status,  photo1, photo2) =>

    async (dispatch, getStore) => {
        let responce = await TableAPI.changeDescriptionCells(id, year, nominal, number, common, varieties, astimation, addInfo, sourses, status,  photo1, photo2)
        debugger
        dispatch(setCatalogList(responce.data.catalogItems))
    };

export const changeDescriptionPhotos = (id, year, nominal, number, photo1, photo2) =>

    async (dispatch, getStore) => {

        let responce = await TableAPI.changeDescriptionPhotos(id, year, nominal, number, photo1, photo2)
        dispatch(setCatalogList(responce.data.catalogItems))
    };





export default AdminCatalogReducer
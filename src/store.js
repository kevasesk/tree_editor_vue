import {createStore} from 'vuex'

const store = createStore({
    state: {
        moving: false,
        movingElement: null,

        clientX: null,
        clientY: null,

        tree:[
            {
                label: '1',
                id: 1,
                children:[
                    {label: '11', id: 11, children:[]},
                    {label: '12', id: 12, children:[]},
                    {label: '13', id: 13, children:[]},
                ]
            },
            {
                label: '2',
                id: 2,
                children:[
                    {label: '21', id: 21, children:[]},
                    {label: '22', id: 22, children:[]},
                ]
            },
            {
                label: '3',
                id: 3,
                children:[
                    {label: '31', id: 31, children:[]},
                ]
            },
        ]
    },
    mutations: {
    },
})

export default store;
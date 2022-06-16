import {createStore} from 'vuex'

var setForChildren = function(id, children, item){
    for(var index in children){
        if(children[index].id == id){
            children[index] = Object.assign({}, children[index], item);
        }else{
            if(children[index].children.length > 0){
                setForChildren(id, children[index].children, item);
            }
        }
    }
}

const store = createStore({
    state: {
        tree:[
            {
                label: '1',
                id: 1,
                children:[
                    {label: '11', id: 11, children:[
                            {label: '211', id: 211, children:[
                                    {label: '2111', id: 2111, children:[]},
                                ]},
                        ]},
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
            }
        ],
        fly: {
            hidden: true,
            id: null,
            label: null
        },
        replace:{
            hidden: true,
        }
    },
    mutations: {
        setItem(state, data){
            for(var index in state.tree){
                if(state.tree[index].id == data.id){
                    state.tree[index] = Object.assign({}, state.tree[index], data.item);
                }else{
                    setForChildren(data.id, state.tree[index].children, data.item);
                }
            }
        }
    },
    getters: {
        // getById: (state) => (id) => {
        //     for(var index in state.tree){
        //         if(state.tree[index].id == id){
        //             return state.tree[index];
        //         }else{
        //             var result = getFromChildren(id, state.tree[index].children);
        //             if(result){
        //                 return result;
        //             }
        //         }
        //     }
        //     return false;
        // },
    },
})

export default store;
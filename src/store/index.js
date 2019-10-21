import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
var state={
    name:""
}
var mutations={
    changeName(state,name){
        state.name=name
    }
}
var actions={
    changeName(context,name){
        context.commit("changeName",name)
    }
}

var store = new vuex.Store({
    state,
    actions,
    mutations
})

export default store
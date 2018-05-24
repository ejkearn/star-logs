import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'

let api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 3000
})

vue.use(vuex)

export default new vuex.Store({
  state:{
    comments: [],
    logs: [],
  },

mutations:{
    addComments(state, comments){
      state.comments = comments
    },
    addLogs(state, logs){
      state.logs = logs
    }
},

actions:{
  addComments({dispatch, commit, state}, comment){
    
      }

}









})
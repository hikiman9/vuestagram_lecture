import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name : 'kim',
      age : 20,
      likes : [30, 43, 32],
      liked : [false, false, false],
    }
  },
  mutations : {
    changeName(state){
        state.name = 'park'
    },
    changeAge(state, data){
        state.age += data ;
    },
    likePost(state, data){
      if (state.liked[data] == false) {
        state.likes[data] ++;
        state.liked[data] = true;
      } else {
        state.likes[data] --;
        state.liked[data] = false
      }
    }
  }
})

export default store
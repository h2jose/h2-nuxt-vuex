export const state = () => ({
  _counter: 0
})

export const mutations = {
  increment(state) {
    state._counter++
  }
}

export const actions = {

   /**
   * Esta funcion se ejecuta al inicializarse la app
   * @param {*} vuexContext commit, dispatch, state
   * @param {*} context es el mismo de asyncData y aqui tenemos acceso a toda la app,axios, env, store etc
   */
  async nuxtServerInit({ dispatch }, context){
    await dispatch('posts/loadPosts')
  },

  sumarDos( {commit}  ) {
    commit('increment');
    commit('increment');
  }
}

export const getters = {
  getCounter(state) {
    return state._counter;
  }
}

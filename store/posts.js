export const state = () => ({
  _posts: []
})

export const getters = {

  getPosts: state => {
    return state._posts
  },
  getTotal: state => {
    return state._posts.length
  }

}

export const mutations = {
  updateValue: (state, payload) => {
    state.value = payload
  },
  setPosts: (state, posts) => {
    state._posts = posts
  }
}

export const actions = {

  async loadPosts({commit}) {
    //let posts = await this.$axios.get('https://jsonplaceholder.typicode.com/posts')
    let {data} = await this.$axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(data)
    commit('setPosts', data)
  }
}

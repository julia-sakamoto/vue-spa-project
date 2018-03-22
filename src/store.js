import SA from 'superagent'

export const boolMod = {
  state: {
    bool: false
  },
  mutations: {
    toggle (state) {
      state.bool = !state.bool
    }
  },
  getters: {
    bool: state => state.bool
  }
}

export const numMod = {
  state: {
    num: 0
  },
  mutations: {
    which (state, payload) {
      state.num = payload.n
    }
  },
  getters: {
    num: state => state.num
  }
}

export const contMod = {
  state: {
    content: {
      contacts: null,
      skills: null,
      imgs: null,
      videos: null
    }
  },
  mutations: {
    setCont (state) {
      SA.get('../static/json/main.json')
        .end(function (err, res) {
          if (res.ok) {
            state.content.contacts = res.body.contacts
            state.content.skills = res.body.skills
            state.content.imgs = res.body.imgs
            state.content.videos = res.body.videos
            console.log(res.body)
          } else {
            console.log(err)
          }
        })
    }
  },
  actions: {
    setCont ({ commit }) {
      commit('setCont')
    }
  },
  getters: {
    contacts: state => state.content.contacts,
    skills: state => state.content.skills,
    imgs: state => state.content.imgs,
    videos: state => state.content.videos
  }
}

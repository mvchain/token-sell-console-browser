import { login, refreshToken } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken(),
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    }
  },

  actions: {
    // 登录
    Login({ commit }, payload) {
      return new Promise((resolve, reject) => {
        login(payload).then(res => {
          window.sessionStorage.setItem('user', JSON.stringify({refreshToken: res.data.refreshToken, username: payload.username}))
          setToken(res.data.token)
          commit('SET_TOKEN', res.data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        commit('SET_TOKEN', '')
        commit('SET_ROLES', [])
        window.sessionStorage.clear()
        removeToken()
        resolve()
      })
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    },
    getReferToken: () => {
      const rToken = getToken();
      let user = JSON.parse(window.sessionStorage.getItem('user'));
      return new Promise((resolve, reject) => {
        refreshToken(rToken).then(res => {
          window.sessionStorage.setItem('user', JSON.stringify({refreshToken: res.data, username: user.username}));
          setToken(res.data);
          resolve();
        }).catch(error => {
          reject(error);
        });
      });
    },
  }
}

export default user

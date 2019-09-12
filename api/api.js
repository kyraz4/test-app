import axios from 'axios';

let instanse = axios.create({
    withCredentials: true,
    headers: {
        'API-KEY': '22fc8439-335b-459b-afae-a1308e831f18',
      },
      baseURL: 'https://social-network.samuraijs.com/api/1.0/'
});

export const userAPI = {
    getUsers(currentPage = 1, pagesSize = 10) {
        return instanse.get(`users?page=${currentPage}&count${pagesSize}`)
         .then(res => res.data);
     },
    follow(id) {
       return instanse.post(`follow/${id}`)
       .then(res => res.data);
     },
     unfollow(id) {
        return instanse.delete(`follow/${id}`)
       .then(res => res.data);
      },
      userAuth() {
          return instanse.get(`auth/me`)
          .then(res => res.data);
      },
      getUser(id) {
          console.warn('Obsolete method. Please use profileAPI object');
          return profileAPI.getUser(id);
      }
}


export const profileAPI = {
      getUser(id) {
          return instanse.get(`profile/${id}`)
          .then(res => res.data);
      },
      getStatus(id) {
          return instanse.get(`profile/status/${id}`)
          .then(res => res.data);
      },
      updateStatus(status) {
          return instanse.put(`profile/status/`, {status: status})
          .then(res => res.data);
      }
}

export const authAPI = {
    login(email, password, rememberMe = false) {
        return instanse.post('auth/login', {email, password, rememberMe})
        .then(res => res.data);
    },
    logout() {
        return instanse.delete('auth/login')
        .then(res => res.data);
    },
}
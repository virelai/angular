export default class GitHubService {
  constructor($http) {
    this.$http = $http;
  }

  getUser(user) {
    return this.$http.get('https://api.github.com/users/' + user + "?client_id=bac44e258557206e9834&client_secret=9e51ca331421f2a608956ee1400110c0b80def1d")
  }
  
  getRepos(user) {
    return this.$http.get('https://api.github.com/users/'+ user +'/repos' + "?client_id=bac44e258557206e9834&client_secret=9e51ca331421f2a608956ee1400110c0b80def1d")
  }
}
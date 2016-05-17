export default class GitHubController {
  constructor(GitHubService, $stateParams, $firebaseArray) {
    
    let ref = new Firebase("https://justyna.firebaseio.com/items");
    this.items = $firebaseArray(ref);
    this.selectedUser = $stateParams.user
    
    GitHubService.getUser(this.selectedUser)
      .then(this.handleGetUserSuccess.bind(this));
    
    GitHubService.getRepos(this.selectedUser)
      .then(this.handleGetReposSuccess.bind(this));
      
  }
  
  handleGetUserSuccess(response) {
    this.User = response.data;
    console.log(this.User);
  }
  
  handleGetReposSuccess(response) {
    this.Repos = response.data;
    console.log(this.Repos);
  }
 
}

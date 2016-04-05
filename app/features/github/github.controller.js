export default class GitHubController {
    
    constructor($http, $scope)
    {
        this.$http = $http;
        this.email;
        this.makeRequest();
    }
        
        makeRequest(){
            
            this.$http.get('https://api.github.com/users/bslipek')
            .then((response)=>{
                this.assignToScope(response)
            });
            
        }
        
        
        assignToScope(response){
            
            console.log(response.data.email);
            this.email = response.data.email;
        }
}
        

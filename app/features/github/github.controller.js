export default class GitHubController {
    
    constructor($http, $scope)
    {
        this.$http = $http;
        this.reposArray;
        this.makeRequest();
    }
        
        makeRequest(){
            
            this.$http.get('https://api.github.com/users/bslipek/repos')
            .then((response)=>{
                this.assignToScope(response)
            });
            
        }
        
        
        assignToScope(response){
            
            this.reposArray = response.data;
            
            
            for (var i = 0; i < this.reposArray.length; i++) {
                
                //this.reposArray = 
                console.log(this.reposArray[i].name);
            }
            
            
            //this.email = response.data.email;
        }
}
        

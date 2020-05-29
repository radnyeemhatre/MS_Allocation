export class LoginUser {  
    email: string;  
    token: string;  
    name:string;
    constructor(email,name,token){
        this.email=email;
        this.token=token;
        this.name=name
    }
    
}
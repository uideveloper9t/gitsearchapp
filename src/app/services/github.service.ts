import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService{
	private username:string;
	private client_id='057472851fcf14674648';
	private client_secret='7989d5e88bc97af4133ec1618e86713409d2710b';

constructor(private _http:Http){
	console.log("github service is Ready..");
	this.username='johnmq';
   }

getUser(){
	return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
	.map(res=> res.json());
} 

getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }

}
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { query } from '@angular/animations';

@Injectable({
  providedIn: 'root'
})
export class GifsSService {

  private api_key: string="nod5Ekl0GwDxLdkI86seu1kAad1P9Ni7&q"
  private url :string ="https://api.giphy.com/v1/gifs/search"
  private results;
  
  
  private _historial:string[] = [

  ] 

  constructor(private http: HttpClient) {}

  get historial(): string[]{
        
    return [...this._historial]; 
  }


  buscarGifs (query:string) {
    
    let clean = query.trim();
    if (clean!='' && !this._historial.includes(clean)) {
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);
    }
  } 

  const params = new HttpParams() 
  .set('q',query);
  .set('api_key',this.api_key );
  
  this.http.get(this.url,{params});
  .subscribe 

}

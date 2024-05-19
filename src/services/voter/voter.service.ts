import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http'
import { Voter } from '../../interfaces/voters';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VoterService {
  // API URI
  private _url: string = "https://localhost:7223/voters/"
  constructor(private http: HttpClient) { }

  getVoterDetails(voterid: any): any {
    return this.http.get<Voter>(this._url + voterid);
  }

  
  getAllVoters(): Observable<HttpResponse<Voter>> {
    return this.http.get<Voter>(
      this._url, { observe: 'response' });
  }
}

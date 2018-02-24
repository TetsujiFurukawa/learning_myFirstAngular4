import { Injectable } from '@angular/core';
import { Member } from './member';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { promise } from 'selenium-webdriver';

@Injectable()
export class MembersService {

  /** DBのURL */
  private membersurl = "api/memberdata";
  private headers = new Headers(
    { 'Content-Type': 'application/json' }
  );
  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.messge || error);
  }

  getMembers(): Promise<Member[]> {
    return this.http.get(this.membersurl)
      .toPromise()
      .then(Response => Response.json().data as Member[])
      .catch(this.handleError);
  }
  addVotes(selectedMembers: any): Promise<string> {
    let promises: Promise<any>[] = [];
    for (let selectedMember of selectedMembers) {
      promises.push(
        this.updateMember(selectedMember));
    }
    return Promise.all(promises).then(
      () => "ご投票ありがとうございました")
      .catch(this.handleError);
  }
  updateMember(member: Member): Promise<boolean> {
    let idUrl = `${this.membersurl}/${member.id}`
    return this.http.put(idUrl, JSON.stringify(member),
      { headers: this.headers })
      .toPromise().then(() => true)
      .catch(this.handleError);
  }
}
import { Component } from '@angular/core';
import { Member } from './member';
import { MembersService } from './members.service';
import { OnInit } from '@angular/core';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@Component({
  selector: 'membertable',
  templateUrl: './membertable.Component.html',
  styleUrls: ['./membertable.component.css'],
})
export class MembertableComponent implements OnInit {
  members: Member[];

  selectedMembers: Member[];
  overflow: boolean;
  whoisselected: string;
  editingMember: Member;

  constructor(private mservice: MembersService) {
    this.selectedMembers = new Array();
    this.overflow = false;
    this.whoisselected = "";
  }
  onSelect(member: Member) {
    let selectedIndex = this.isSelected(member);
    if (selectedIndex >= 0) {
      this.selectedMembers.splice(selectedIndex, 1);
      this.overflow = false;
    } else if (this.selectedMembers.length > 3) {
      this.overflow = true;
    } else {
      this.selectedMembers.push(member);
    }
    this.whoisselected = this.showWhoisSelected();
  }

  isSelected(themember: Member): number {
    for (let i = 0; i < this.selectedMembers.length; i++) {
      if (this.selectedMembers[i] === themember) {
        return i;
      }
    }
    return -1;
  }
  showWhoisSelected(): string {
    let whois = "";
    for (let member of this.selectedMembers) {
      whois += member.name + "さん、";
    }
    return whois.substr(0, whois.length - 2) + "が選ばれました";
  }
  getMembers() {
    this.mservice.getMembers().then
      (getMembers => this.members = getMembers);
  }
  ngOnInit(): void {
    this.getMembers();
  }
  vote(): void {
    for (let selectedMember of this.selectedMembers) {
      selectedMember.voted++;
    }
    this.mservice.addVotes(this.selectedMembers)
      .then((Response) => {
        this.whoisselected = Response;
        this.selectedMembers = [];
      })
  }
  editProfile(themember: Member): void {
    this.editingMember = themember;
  }
  isEditing(themember: Member): boolean {
    return this.editingMember == themember;
  }
  cancelEditing(): void {
    this.editingMember = null;
  }
  updateProfile(): void {
    this.mservice.updateMember(this.editingMember)
      .then(() => this.editingMember = null);
  }
}

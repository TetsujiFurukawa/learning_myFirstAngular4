import { Component } from '@angular/core';
import { Member } from './member';
import { MembersService } from './members.service';
import { OnInit } from '@angular/core';

@Component({
    selector: "poll",
    templateUrl: './poll.component.html',
    styleUrls: ['./poll.component.css']
})

export class PollComponent implements OnInit {
    /** メンバー */
    membersToReport: Member[];

    /** コンストラクタ */
    constructor(private mservice: MembersService) { }

    /** 投票で検索 */
    findByVoted(voted: number, fromMembers: Member[]): Member[] {
        let foundMembers: Member[] = [];

        for (let member of fromMembers) {
            if (member.voted == voted) {
                foundMembers.push(member);
            }
        }
        return foundMembers;
    }
    doReportPoll(cpMembers: Member[]): Member[] {
        let sortedMembers = cpMembers.sort(
            (m1, m2) => m2.voted - m1.voted
        );

        let maxvote = (sortedMembers[0]).voted;
        let membersToReport: Member[] = [];
        for (let voted = maxvote; voted >= 0; voted--) {
            let groupmembers: Member[] = this.findByVoted(voted, sortedMembers);
            if (groupmembers.length > 0) {
                membersToReport = membersToReport.concat(groupmembers);
            }
            if (membersToReport.length >= 4) { break; }
        }
        return membersToReport;
    }
    reportPoll(): void {
        this.mservice.getMembers().then
            (getMembers => this.membersToReport = this.doReportPoll(getMembers));
    }
    ngOnInit() {
        this.reportPoll();
    }
}
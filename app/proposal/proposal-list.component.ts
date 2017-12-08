import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component ({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})
export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://portfolio.soderstrom.com', 'Ruby on Rails', 150, 120, 15, 'soderstromshane@gmail.com')
  proposalTwo: Proposal = new Proposal(16, 'Def Company', 'http://portfolio.soderstrom.com', 'Ruby on Rails', 150, 120, 15, 'soderstromshane@gmail.com')
  proposalThree: Proposal = new Proposal(17, 'Ghi Company', 'http://portfolio.soderstrom.com', 'Ruby on Rails', 150, 120, 15, 'soderstromshane@gmail.com')
  proposals: Proposal[] = [this.proposalOne,
                           this.proposalTwo,
                           this.proposalThree]
}
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { VoterService } from '../../services/voter/voter.service';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgForOf } from '@angular/common';
import { Voter } from '../../interfaces/voters';

@Component({
  selector: 'app-voters',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, NgForOf],
  templateUrl: './voters.component.html',
  styleUrl: './voters.component.scss',
  schemas:[NO_ERRORS_SCHEMA]
})
export class VotersComponent {
  title = 'Post Office Details';
  requestFinished = false;
  requestValid = false;
  newForm = new FormGroup({
    fieldVal: new FormControl('607807')
  });

  public Voter!: Voter;

  constructor(private voterService: VoterService) {

  }

  ngOnInit() {
    this.getVoters() ;
  }

  getVoters() {
    let voterId = this.newForm.get('fieldVal')?.value;
    this.voterService.getAllVoters()
      .subscribe(resp => {
        this.Voter! = { ...resp.body! };
      }        
      );
  }

}

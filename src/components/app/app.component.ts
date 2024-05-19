import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VoteComponent } from '../vote/vote.component';
import { VotersComponent } from '../voters/voters.component';
import { CandidatesComponent } from '../candidates/candidates.component';
import { HttpClientModule , HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VoteComponent, VotersComponent, CandidatesComponent, HttpClientModule],
  providers: [ HttpClientModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'voting-ui-angular';
}

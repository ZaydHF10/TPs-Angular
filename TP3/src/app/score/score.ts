import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score',
  standalone: true,
  templateUrl: './score.html',
  styleUrls: ['./score.css']
})
export class ScoreComponent {
  @Input() score = 0;
  @Input() correct = 0;
  @Input() wrong = 0;
}

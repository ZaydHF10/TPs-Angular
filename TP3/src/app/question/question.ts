import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface QuizQuestion {
  question: string;
  options: string[];
  reponse: string;
}

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './question.html',
  styleUrls: ['./question.css']
})
export class QuestionComponent {
  @Input() question!: QuizQuestion;
  @Input() disabled = false;
  @Input() selected = '';
  @Output() choose = new EventEmitter<string>();

  onSelect(opt: string) {
    if (this.disabled) return;
    this.choose.emit(opt);
  }
}

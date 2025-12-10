import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from '../question/question';
import { ScoreComponent } from '../score/score';

interface QuizQuestion {
  question: string;
  options: string[];
  reponse: string;
  type?: 'text' | 'image' | 'audio';
}

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule, FormsModule, QuestionComponent, ScoreComponent],
  templateUrl: './game.html',
  styleUrls: ['./game.css']
})
export class GameComponent {
  questions: QuizQuestion[] = [
    { question: 'Quel est le plus grand océan du monde ?', options: ['Pacifique', 'Atlantique', 'Indien', 'Arctique'], reponse: 'Pacifique' },
    { question: "Quelle est la capitale de l'Algérie ?", options: ['Alger', 'Tunis', 'Tanger'], reponse: 'Alger' },
    { question: 'Quelle est la couleur du ciel ?', options: ['Bleu', 'Vert', 'Rouge'], reponse: 'Bleu' }
  ];

  currentIndex = signal(0);
  score = signal(0);
  correct = signal(0);
  wrong = signal(0);
  answered = signal(false);
  selected = signal('');

  selectOption(option: string) {
    if (this.answered()) return;
    this.selected.set(option);
    this.answered.set(true);
    const q = this.questions[this.currentIndex()];
    if (option === q.reponse) {
      this.score.update(s => s + 1);
      this.correct.update(c => c + 1);
    } else {
      this.score.update(s => s - 1);
      this.wrong.update(w => w + 1);
    }
  }

  next() {
    if (this.currentIndex() < this.questions.length - 1) {
      this.currentIndex.update(i => i + 1);
      this.answered.set(false);
      this.selected.set('');
    }
  }

  restart() {
    this.currentIndex.set(0);
    this.score.set(0);
    this.correct.set(0);
    this.wrong.set(0);
    this.answered.set(false);
    this.selected.set('');
  }
}

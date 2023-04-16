import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CardDto } from 'src/app/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  imports: [ReactiveFormsModule, DatePipe],
  standalone: true,
})
export class CardComponent implements OnInit {
  @Input() card!: CardDto;
  @Output() submitAnswer = new EventEmitter<{ id: number; answer: string }>();
  constructor() {}

  userAnswer = new FormControl('', { nonNullable: true });

  ngOnInit() {}

  get formId() {
    return `form-${this.card.id}`;
  }

  get whenReview(): number | null {
    return this.card.whenReview ?? this.card.when_review ?? null;
  }

  buttonClicked() {
    this.submitAnswer.emit({
      id: this.card.id,
      answer: this.userAnswer.value,
    });
  }
}

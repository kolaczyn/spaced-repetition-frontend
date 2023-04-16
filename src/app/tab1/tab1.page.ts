import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { CardsService } from './cards.service';
import { CardDto } from '../types';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { CardComponent } from './card/card.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    ExploreContainerComponent,
    AsyncPipe,
    JsonPipe,
    NgFor,
    CardComponent,
  ],
})
export class Tab1Page {
  constructor(private cardsService: CardsService) {}
  cards$ = this.cardsService.getCards();

  answerCard({ id, answer }: { id: number; answer: string }) {
    this.cardsService.answerCard(id, answer).subscribe();
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardDto } from '../types';
import { shareReplay } from 'rxjs';

const ENDPOINT = 'http://localhost:8000';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  constructor(private http: HttpClient) {}

  getCards() {
    return this.http
      .get<CardDto[]>(`${ENDPOINT}/v2/cards`)
      .pipe(shareReplay(1));
  }

  answerCard(id: number, answer: string) {
    return this.http.patch<CardDto>(`${ENDPOINT}/v2/cards/${id}`, { answer });
  }
}

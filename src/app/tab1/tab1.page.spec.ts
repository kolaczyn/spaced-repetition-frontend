import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { IonicModule } from '@ionic/angular';
import { of } from 'rxjs';
import { CardDto } from '../types';
import { CardsService } from './cards.service';
import { Tab1Page } from './tab1.page';
import { CardComponent } from './card/card.component';

describe('Tab1Page', () => {
  let component: Tab1Page;
  let fixture: ComponentFixture<Tab1Page>;
  let cardsServiceSpy: jasmine.SpyObj<CardsService>;

  beforeEach(async () => {
    const spy = jasmine.createSpyObj('CardsService', [
      'getCards',
      'answerCard',
    ]);
    await TestBed.configureTestingModule({
      imports: [
        Tab1Page,
        HttpClientTestingModule,
        IonicModule.forRoot(),
        CardComponent,
      ],
      providers: [{ provide: CardsService, useValue: spy }],
    }).compileComponents();

    cardsServiceSpy = TestBed.inject(
      CardsService
    ) as jasmine.SpyObj<CardsService>;
    cardsServiceSpy.getCards.and.returnValue(
      of([
        {
          id: 1,
          question: 'test question',
          answer: 'test answer',
        },
      ] as CardDto[])
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the question text', () => {
    const questionElement = fixture.debugElement.query((el) =>
      el.nativeElement.textContent.includes('test question')
    );
    expect(questionElement).toBeTruthy();
  });
});

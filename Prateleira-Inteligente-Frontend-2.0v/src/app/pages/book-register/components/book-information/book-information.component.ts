import { Component, input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DATE_LOCALE, provideNativeDateAdapter } from '@angular/material/core';
import { MatDatepickerIntl, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BookInformationControls } from '../../book-form.types';
import { BookCoverComponent } from '../book-cover/book-cover.component';

function portugueseDatepickerIntl(): MatDatepickerIntl {
  const intl = new MatDatepickerIntl();
  intl.calendarLabel = 'Calendário';
  intl.openCalendarLabel = 'Abrir calendário';
  intl.closeCalendarLabel = 'Fechar calendário';
  intl.prevMonthLabel = 'Mês anterior';
  intl.nextMonthLabel = 'Próximo mês';
  intl.prevYearLabel = 'Ano anterior';
  intl.nextYearLabel = 'Próximo ano';
  intl.prevMultiYearLabel = 'Anos anteriores';
  intl.nextMultiYearLabel = 'Próximos anos';
  intl.switchToMonthViewLabel = 'Escolher mês e dia';
  intl.switchToMultiYearViewLabel = 'Escolher ano';
  return intl;
}

@Component({
  selector: 'app-book-information',
  imports: [
    ReactiveFormsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    BookCoverComponent,
  ],
  templateUrl: './book-information.component.html',
  styleUrl: './book-information.component.scss',
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    provideNativeDateAdapter(),
    { provide: MatDatepickerIntl, useFactory: portugueseDatepickerIntl },
  ],
})
export class BookInformationComponent {
  readonly form = input.required<FormGroup<BookInformationControls>>();
}

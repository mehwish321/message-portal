import { Pipe, PipeTransform } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';

@Pipe({
  name: 'edtDate',
  standalone: true,
})
export class DatePipe implements PipeTransform {
  transform(value: Timestamp | string | Date | null): string {
    if (!value) return 'Invalid Date';

    let date: Date;

    if (value instanceof Timestamp) {
      date = value.toDate(); // Convert Timestamp
    } else if (typeof value === 'string') {
      date = new Date(value);
    } else {
      date = value;
    }

    return new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York', // Convert to EDT
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    }).format(date);
  }
}

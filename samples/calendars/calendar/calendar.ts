import { Property } from '../prop/main';
import { getCalendarMethods, getCalendarProps } from './calendar-prop'
import { Calendar } from '../resources/component';

let calendar: Calendar = new Calendar();
calendar.appendTo("#calendar");
let PropSection: HTMLElement = document.querySelector('.prop') as HTMLElement;
let PropTable: Property = new Property(calendar, getCalendarProps(calendar), getCalendarMethods(calendar));
PropTable.appendTo(PropSection);
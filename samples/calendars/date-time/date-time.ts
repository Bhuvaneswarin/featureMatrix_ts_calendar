import { Property } from '../prop/main';
import { getDateTimeMethods, getDateTimeProps } from './date-time-prop'
import { DateTimePicker } from '../resources/component';

let dateTime: DateTimePicker  = new DateTimePicker({width: 300, placeholder: "Select a date and time"});
dateTime.appendTo("#dateTime");
let PropSection: HTMLElement = document.querySelector('.prop') as HTMLElement;
let PropTable: Property = new Property(dateTime, getDateTimeProps(dateTime), getDateTimeMethods(dateTime));
PropTable.appendTo(PropSection);
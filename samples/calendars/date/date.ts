import { Property } from '../prop/main';
import { getDateMethods, getDateProps } from './date-prop'
import { DatePicker } from '../resources/component';

let date: DatePicker  = new DatePicker({width: 300, placeholder: "Choose a date"});
date.appendTo("#date");
let PropSection: HTMLElement = document.querySelector('.prop') as HTMLElement;
let PropTable: Property = new Property(date, getDateProps(date), getDateMethods(date));
PropTable.appendTo(PropSection);
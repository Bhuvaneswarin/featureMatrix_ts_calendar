import { Property } from '../prop/main';
import { getDateRangeMethods, getDateRangeProps } from './date-range-prop'
import { DateRangePicker } from '../resources/component';

let dateRange: DateRangePicker  = new DateRangePicker({width: 300});
dateRange.appendTo("#dateRange");
let PropSection: HTMLElement = document.querySelector('.prop') as HTMLElement;
let PropTable: Property = new Property(dateRange, getDateRangeProps(dateRange), getDateRangeMethods(dateRange));
PropTable.appendTo(PropSection);
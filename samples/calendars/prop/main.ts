import * as Util from './prop-util';
import { CalendarsProperty } from './calendars-prop-utils';
import { CalendarsMethods } from './calendars-methods';
import { simple, complex, ButtonOptions, DDLOptions, rowOptions, InputOptions } from './prop-util';
import { createElement } from '@syncfusion/ej2-base';
import { Calendar } from '../resources/component';

export class Property {
    private calendar: Calendar;
    private properties: (simple | complex)[];
    private methods: { [Key: string]: string | object }[];
    constructor(calendar: any , prop?: (simple | complex)[], methods?: { [Key: string]: string | object }[]) {
        this.calendar = calendar;
        this.properties = prop;
        this.methods = methods;
    }
    public appendTo(selector: HTMLElement) {
        if (this.properties) {
            selector.appendChild(this.generateTable());
        }
        if (this.methods) {
            selector.appendChild(this.generateMethods());
        }
    }
    public generateTable(): HTMLElement {
        let table = createElement('div', { innerHTML: '<div class=highlight>Properties:</div>' });
        let calendarProp = new CalendarsProperty(this.calendar, this.properties);
        table.appendChild(calendarProp.render());
        return table;
    }

    public generateMethods(): HTMLElement {
        let calendarMethods = new CalendarsMethods(this.calendar, this.methods);
        return calendarMethods.render()
    }
}






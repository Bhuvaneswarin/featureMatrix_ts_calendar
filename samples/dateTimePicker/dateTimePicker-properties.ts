import { DateTimePicker } from '../resources/component';
import { simple, complex } from '../component-properties/properties-util';

export function getDateTimeMethods(dateTime: DateTimePicker): { [Key: string]: string | object }[] {
    let methods: { [Key: string]: string | object }[] = [];
    methods.push({
        name: 'destroy'
    });
    methods.push({
        name: 'getPersistData'
    });
    methods.push({
        name: 'navigateTo'
    });
    methods.push({
        name: 'currentView'
    });
    methods.push({
        name: 'focusIn'
    });
    methods.push({
        name: 'focusOut'
    });
    methods.push({
        name: 'blur'
    });
    return methods;
}

export function getDateTimeProps(dateTime: DateTimePicker): (simple | complex)[] {
    let props: (simple | complex)[] = [];
    props.push({ prop: 'enablePersistence', type: 'bool' });
    props.push({ prop: 'enableRtl', type: 'bool' });
    props.push({ prop: 'enabled', type: 'bool' });
    props.push({ prop: 'readonly', type: 'bool' });
    props.push({ prop: 'showClearButton ', type: 'bool' });
    props.push({ prop: 'showTodayButton', type: 'bool' });
    props.push({ prop: 'strictMode ', type: 'bool' });
    props.push({ prop: 'weekNumber', type: 'bool' });
    props.push({ prop: 'cssClass', type: 'text' });
    props.push({ prop: 'depth', type: 'text' });
    props.push({ prop: 'firstDayOfWeek', type: 'text' });
    props.push({ prop: 'floatLabelType', type: 'text' });
    props.push({ prop: 'format', type: 'text' });
    props.push({ prop: 'locale', type: 'text' });
    props.push({ prop: 'max', type: 'text' });
    props.push({ prop: 'min', type: 'text' });   
    props.push({ prop: 'placeholder', type: 'text' });
    props.push({ prop: 'start', type: 'text' });
    props.push({ prop: 'step', type: 'text' });
    props.push({ prop: 'timeFormat ', type: 'text' });
    props.push({ prop: 'value', type: 'text' });
    props.push({ prop: 'width', type: 'text' });
    props.push({ prop: 'zIndex', type: 'text' });
    return props;
}
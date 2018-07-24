import { DateTimePicker } from "../resources/component";
import { DropDownList } from '@syncfusion/ej2-dropdowns';

let dateTimePicker: DateTimePicker = new DateTimePicker({format: 'dd-MMM-yy hh:mm a', value: new Date()});
dateTimePicker.appendTo('#dateTimepicker');

let data: string[] = ['dd-MMM-yy', 'yyyy-MM-dd', 'dd-MMMM', 'dd-MMM-yy hh:mm a', 'yyyy-MM-dd HH:mm', 'dd-MMMM HH:mm'];

let dropdownInstance: DropDownList = new DropDownList({
    dataSource: data,
    change: onChange
});
dropdownInstance.appendTo('#dateformats');

function onChange(): void {
    dateTimePicker.format = <string>dropdownInstance.value;
}

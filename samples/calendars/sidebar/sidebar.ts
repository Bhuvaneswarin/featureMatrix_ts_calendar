import { Property } from '../prop/main';
import { getSidebarMethods, getSidebarProps } from './sidebar-prop'
import { Sidebar } from '../resources/component-sidebar';

let sidebar: Sidebar = new Sidebar();
sidebar.appendTo("#sidebar");
let PropSection: HTMLElement = document.querySelector('.prop') as HTMLElement;
let PropTable: Property = new Property(sidebar, getSidebarProps(sidebar), getSidebarMethods(sidebar));
PropTable.appendTo(PropSection);

document.getElementById('close').onclick = (): void => {
    sidebar.hide();
};
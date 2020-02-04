import { Component } from 'angular-ts-decorators';
import { EmployeesService } from '../employees.service';

@Component({
    selector: 'app-navbar',
    template: require('./navbar.component.html')
})
export class NavbarComponent {
    title: string = 'Manage Employees';
    titleEmployee: string = 'Add New Employee';
    active: boolean = true;

    constructor(private employeesService: EmployeesService) {}

    add(name: string, salary: number, age: number): void {
        if (!name || !salary || !age) { return; }
        name = name.trim();
        this.employeesService.addEmployee(name, salary, age);
    }
}
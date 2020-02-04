import { Component, OnInit } from 'angular-ts-decorators';
import { EmployeesService } from '../employees.service';

@Component({
    selector: 'app-list-employees',
    template: require('./list-employees.component.html')
})
export class ListEmployeesComponent implements OnInit{
    listEmployees = [];

    constructor(private employeesService: EmployeesService) {}

    ngOnInit() {
        this.getEmployees().then();
    }

    async getEmployees(): Promise<void> {
        try {
            const res = await this.employeesService.getListEmployees();
            this.listEmployees = res.data;
        } catch (e) {
            console.error(e.message);
        }
    }

}
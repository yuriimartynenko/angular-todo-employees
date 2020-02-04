import {Component, OnInit} from 'angular-ts-decorators';
import { IHttpService, IPromise, IQService } from 'angular';
import { Injectable } from 'angular-ts-decorators';

@Component({
    selector: 'app-root',
    template: require('./app.component.html'),
    styles: [require('./app.component.css')]
})
export class AppComponent {
/*    private employeesUrl = 'http://dummy.restapiexample.com/api/v1/employees';
    private heroes: any = [];
    private idx: number = 0;
    res: any = '';
    title: string = 'Manage Employees';
    titleEmployee: string = 'Add New Employee';
    active: boolean = true;

    constructor(private $http: IHttpService, private $q: IQService) { }
    ngOnInit(): void {
        this.getHeroes();
    }

    showLoader: any = false;

    getHeroes() {
        this.showLoader = true;
        const deferred = this.$q.defer();
        this.$http.get(this.employeesUrl).then(response => {
            this.res = response.data;
            this.res.data.forEach(item => {
                this.heroes.push({...item, selected: false, editing: false});
            });
            deferred.resolve(response.data);
            this.showLoader = false;
        }, error => {
            console.error(error);
            deferred.reject(error);
        });
        return deferred.promise;
    }

    addEmployee(name: string, salary: number, age: number): any {
        const deferred = this.$q.defer<any>();
        this.idx = this.heroes.length ? this.heroes[this.heroes.length-1].id : 0;
        this.idx++;
        console.log(this.heroes.length);
        const employee = { id: `${this.idx}`, employee_name: name, employee_salary: salary, employee_age: age, selected: false };
        this.heroes.push(employee);
        console.log(this.heroes);
        deferred.resolve(employee);
        return deferred.promise;
    }

    add(name: string, salary: number, age: number): void {
        if (!name || !salary || !age) { return; }
        name = name.trim();
        this.addEmployee(name, salary, age);
    }

    delete(hero): void {
        this.heroes = this.heroes.filter(h => h !== hero);
    }
    count=0;
    deleteSelectedEmployees() {
        for(let i=(this.heroes.length -1); i > -1; i--) {
            if(this.heroes[i].selected) {
                this.heroes.splice(i, 1);
                this.count = 0;
            }
        }
    }

    selectEmployee(item) {
        if (item.selected) {
            this.count++;
        } else {
            this.count--;
        }
    }

    checkAllOptions() {
        if (this.heroes.every(val => val.selected)) {
            this.heroes.forEach(val => {
                val.selected = false;
                this.count--;
            });
        } else {
            this.heroes.forEach(val => {
                if (!val.selected) {
                    val.selected = true;
                    this.count++;
                }
            });
        }
    }

    updateHero(hero: any): IPromise<any> {
        const deferred = this.$q.defer<any>();
        const index = this.heroes.findIndex(h => h.id === hero.id);
        if (index > -1) {
            this.heroes[index] = (hero);
            deferred.resolve(hero);
        }
        hero.editing = false;
        console.log(this.heroes);
        return deferred.promise;
        // return this.$http.put(this.heroesUrl, hero);
    }

    editItem(hero: any): void {
        hero.editing = true;
        [hero.oldName, hero.oldSalary, hero.oldAge] = [hero.employee_name, hero.employee_salary, hero.employee_age];
    }

    cancel(hero): void {
        hero.editing = false;
        [hero.employee_name, hero.employee_salary, hero.employee_age] = [hero.oldName, hero.oldSalary, hero.oldAge];
    }

    deleteHero(hero): any {
        const deferred = this.$q.defer<boolean>();
        const id = typeof hero === 'number' ? hero : hero.id;
        const index = this.heroes.findIndex(h => h.id === id);
        if (index > -1) {
            this.heroes.splice(index, 1);
            deferred.resolve(true);
        }
        return deferred.promise;
    }*/
}
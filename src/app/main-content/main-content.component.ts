import { Component, OnInit } from '@angular/core';

interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  course: string;
  editMode: boolean;
}
@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {


  studentArray: Array<IStudent> = [];
  disableAddButton = false;
  constructor() { }

  ngOnInit() {
    this.studentArray = [
      {
        id: 1,
        firstName: 'Kong',
        lastName: 'Moua',
        course: 'Programming',
        editMode: false,
      },
      {
        id: 2,
        firstName: 'Houa',
        lastName: 'Moua',
        course: 'Accounting',
        editMode: false,
      },
      {
        id: 3,
        firstName: 'Choua',
        lastName: 'Moua',
        course: 'Interior Design',
        editMode: false,
      },
    ];
  }

  addStudent() {
    this.studentArray.unshift(  {
      id: null,
      firstName: null,
      lastName: null,
      course: null,
      editMode: true,
    });
    this.disableAddButton = true;
  }

  removeStudent(index: number) {
    console.log('index---->', index);
    this.studentArray.splice(index, 1);
  }

  saveStudent() {
    this.studentArray[0].editMode = false;
    this.disableAddButton = false;

    this.sort();
  }

  sort() {
    this.studentArray.sort((a: IStudent, b: IStudent) => {
      return a.id < b.id ? -1 : 1;
    });
  }

}

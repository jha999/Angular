import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddStudentComponent} from './add-student/add-student.component'
import {UpdateStudentComponent} from './update-student/update-student.component'
import {ListStudentComponent} from './list-student/list-student.component'
import {TeacherComponent} from './teacher/teacher.component'
import {StudentComponent} from './student/student.component'
import {HomeComponent} from './home/home.component'
import {ViewStudentComponent} from './view-student/view-student.component'

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',pathMatch:'full'
  },
  {
    component:AddStudentComponent,
    path:'teacher/add'
  },
  {
    component:UpdateStudentComponent,
    path:'update/:id'
  },
  {
    component:ListStudentComponent,
    path:'teacher/list'
  },
  {
    component:StudentComponent,
    path:'student'
  },
  {
    component:TeacherComponent,
    path:'teacher'
  },
  {
    component:HomeComponent,
    path:''
  },
  {component:ViewStudentComponent,
  path:'view'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

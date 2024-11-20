import { Routes } from '@angular/router';
import { TodoComponent } from './Component/todo/todo.component';

export const routes: Routes = [
    { path: '', component: TodoComponent },
    { path: '**', redirectTo: '/' }
];

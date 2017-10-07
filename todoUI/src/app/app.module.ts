import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoService } from './todo.service';


import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { TodoListComponent } from './todo-list.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
	TodoListComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

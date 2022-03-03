import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-lista-user',
  templateUrl: './lista-user.component.html',
  styleUrls: ['./lista-user.component.css']
})
export class ListaUserComponent implements OnInit {
@Input() public arrayUsers:any ;
@Output() public editClicked: EventEmitter<any> = new EventEmitter();
@Output() public deleteClicked: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  editWasClicked(user:any){
    this.editClicked.emit(user);
  }
  deleteWasClicked(user:any){
    this.deleteClicked.emit(user);
  }

}

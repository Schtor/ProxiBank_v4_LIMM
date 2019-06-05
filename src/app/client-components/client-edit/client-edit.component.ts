import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css'],
    providers: [ClientService]
})
export class ClientEditComponent implements OnInit {

  constructor(private service: ClientService) { }

  ngOnInit() {
  }

}

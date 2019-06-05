import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css'],
    providers: [ClientService]
})
export class ClientCreateComponent implements OnInit {

  constructor(private service: ClientService) { }

  ngOnInit() {
  }

}

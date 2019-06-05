import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-show',
  templateUrl: './client-show.component.html',
  styleUrls: ['./client-show.component.css'],
    providers: [ClientService]
})
export class ClientShowComponent implements OnInit {

  constructor(private service: ClientService) { }

  ngOnInit() {
  }

}

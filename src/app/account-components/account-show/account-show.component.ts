import { Component, OnInit } from '@angular/core';
import { OperationService } from 'src/app/service/operation.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-show',
  templateUrl: './account-show.component.html',
  styleUrls: ['./account-show.component.css']
})
export class AccountShowComponent implements OnInit {
  operations: any = [];
  id = this.activatedRoute.snapshot.params.id;
  constructor(private operationService: OperationService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.operationService.getOperationByAccountId(this.id).subscribe(data => {
      this.operations = data;
    })
  }

}

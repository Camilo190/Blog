import { Component, OnInit } from '@angular/core';
import { TestService } from './services/test.service';
import { Test } from './models/test.dto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private service: TestService) {}
  title = 'main';
  data: any;
  ngOnInit(): void {
    this.service.getAllTest().subscribe((value: any) => {
      this.data = value[0].data;
    });
  }
}

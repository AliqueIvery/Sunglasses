import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EarringService } from '../earring.service';

@Component({
  selector: 'app-earring-detail',
  templateUrl: './earring-detail.component.html',
  styleUrls: ['./earring-detail.component.css']
})
export class EarringDetailComponent implements OnInit {
  public id: any;
  public earrings: any;
  constructor(private eServ: EarringService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.eServ.getAllEarrings().subscribe(data => this.earrings = data);
  }

}

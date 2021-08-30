import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MaskService } from '../mask.service';

@Component({
  selector: 'app-mask-detail',
  templateUrl: './mask-detail.component.html',
  styleUrls: ['./mask-detail.component.css']
})
export class MaskDetailComponent implements OnInit {
  public masks:any;
  public id:any;
  constructor(private mServ: MaskService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.mServ.getMasks().subscribe(data => this.masks = data);
  }

}

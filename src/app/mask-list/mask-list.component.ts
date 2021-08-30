import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaskService } from '../mask.service';

@Component({
  selector: 'app-mask-list',
  templateUrl: './mask-list.component.html',
  styleUrls: ['./mask-list.component.css']
})
export class MaskListComponent implements OnInit {
  public masks: any;
  constructor(private mServ: MaskService, private route: Router) { }

  ngOnInit(): void {
    this.mServ.getMasks().subscribe(data => this.masks = data);
  }
  onSelect(mask:any){
    this.route.navigate(["/mask-detail", mask.id]);
  }

}

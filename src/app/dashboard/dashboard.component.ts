import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  blocks = ['block1', 'block2']
  cards = ['1', '2', '3', '4', '5', '6']
  charts = ["1", "2"]
  constructor() { }

  ngOnInit() {
  }
  drop(event: CdkDragDrop<string[]>) {
    console.log(event.previousIndex + ' ' + event.currentIndex)
    moveItemInArray(this.cards, event.previousIndex, event.currentIndex);
  }

  dropBlock(event: CdkDragDrop<string[]>) {
    console.log(event.previousIndex + ' ' + event.currentIndex)
    moveItemInArray(this.blocks, event.previousIndex, event.currentIndex);
  }
  dropCharts(event: CdkDragDrop<string[]>) {
    console.log(event.previousIndex + ' ' + event.currentIndex)
    moveItemInArray(this.charts, event.previousIndex, event.currentIndex);
  }

}

import { Component } from '@angular/core';
import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterPipe } from './filter.pipe';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hotels: Array<any>;

  constructor(private _dataService: DataService) {
    this._dataService.getHoteles()
      .subscribe(res => this.hotels = res);
  }


}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'umm-digital';

  keywords: string[] = ['Apple', 'India', 'Cricket', 'Oscar 2k19', 'Technology', 'International'];

  private _customTopic: string = 'bitcoin';
  public get customTopic(): string {
    return this._customTopic;
  }
  public set customTopic(value: string) {
    this._customTopic = value;
  }

  constructor(private router: Router) {}

  customNews(): void {
    this.router.navigate(['/'+this._customTopic]);
  }

}

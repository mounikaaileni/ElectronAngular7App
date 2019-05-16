import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  selectedTheme =  new FormControl("0");
  primaryColor = new FormControl("#870074");
  textColor =  new FormControl("#ffffff");
  bgColor = new FormControl("#2c232b");

  constructor(private themeService: ThemeService) {
    this.themeService.toggleDark();
    this.selectedTheme.valueChanges.subscribe(value => {
      switch (value) {
        case "0":
          this.themeService.toggleDark();
          break;
        case "1":
          this.themeService.toggleLight();
          break;
        case "2":
          this.themeService.CustomTheme(this.primaryColor.value, this.textColor.value, this.bgColor.value);
          break;
      }
    });
  }

  ngOnInit() {
  }

  public changeCustomThemeColors() {
    this.themeService.CustomTheme(this.primaryColor.value, this.textColor.value, this.bgColor.value);
  }
}

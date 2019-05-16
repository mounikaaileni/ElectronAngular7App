import { Injectable } from '@angular/core';

export const darkTheme = {
  'primary-color': '#f4af03',
  'background-color': '#414550',
  'text-color': '#fff'
};

export const lightTheme = {
  'primary-color': '#0072c6',
  'background-color': '#ffffff',
  'text-color': '#333333'
};

export const customTheme = {
  'primary-color': '#870074',
  'background-color': '#2c232b',
  'text-color': '#ffffff'
};

@Injectable({ providedIn: 'root' })
export class ThemeService {
  toggleDark() {
    this.setTheme(darkTheme);
  }

  toggleLight() {
    this.setTheme(lightTheme);
  }
  CustomTheme(priclr, txtclr, bgclr) {
    customTheme["primary-color"] = priclr;
    customTheme["background-color"] = bgclr;
    customTheme["text-color"] = txtclr;
    this.setTheme(customTheme);
  }
  private setTheme(theme: {}) {
    Object.keys(theme).forEach(k =>
      document.documentElement.style.setProperty(`--${k}`, theme[k])
    );
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() { }

  public loadScript(path: string): void {
    const script = document.createElement("script");
    script.src = path;
    document.querySelector('body')?.appendChild(script);
  }
}

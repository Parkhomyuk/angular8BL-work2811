import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isfullscreen: boolean=false;
  constructor() { }

  ngOnInit() {
  }
  fullScreen() {
    if(this.isfullscreen == false){
      // Trigger fullscreen
      const docElmWithBrowsersFullScreenFunctions = document.documentElement as HTMLElement & {
        mozRequestFullScreen(): Promise<void>;
        webkitRequestFullscreen(): Promise<void>;
        msRequestFullscreen(): Promise<void>;
      };

      if (docElmWithBrowsersFullScreenFunctions.requestFullscreen) {
        //noinspection TypeScriptValidateTypes
        docElmWithBrowsersFullScreenFunctions.requestFullscreen();
      } else if (docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen) { /* Firefox */
        docElmWithBrowsersFullScreenFunctions.mozRequestFullScreen();
      } else if (docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
        //noinspection TypeScriptValidateTypes
        docElmWithBrowsersFullScreenFunctions.webkitRequestFullscreen();
      } else if (docElmWithBrowsersFullScreenFunctions.msRequestFullscreen) { /* IE/Edge */
        docElmWithBrowsersFullScreenFunctions.msRequestFullscreen();
      }
      this.isfullscreen = true;
    }else{
      const docWithBrowsersExitFunctions = document as Document & {
        mozCancelFullScreen(): Promise<void>;
        webkitExitFullscreen(): Promise<void>;
        msExitFullscreen(): Promise<void>;
      };
      if (docWithBrowsersExitFunctions.exitFullscreen) {
        docWithBrowsersExitFunctions.exitFullscreen();
      } else if (docWithBrowsersExitFunctions.mozCancelFullScreen) { /* Firefox */
        docWithBrowsersExitFunctions.mozCancelFullScreen();
      } else if (docWithBrowsersExitFunctions.webkitExitFullscreen) { /* Chrome, Safari and Opera */
        docWithBrowsersExitFunctions.webkitExitFullscreen();
      } else if (docWithBrowsersExitFunctions.msExitFullscreen) { /* IE/Edge */
        docWithBrowsersExitFunctions.msExitFullscreen();
      }
      this.isfullscreen = false;
    }

  }
}

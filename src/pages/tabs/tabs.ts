import { Component } from '@angular/core';

import { AjustesPage } from '../ajustes/ajustes';
import { PadariasPage } from '../padarias/padarias';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PadariasPage;
  tab2Root = AjustesPage;

  constructor() {

  }
}

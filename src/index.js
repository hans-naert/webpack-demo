import _ from 'lodash';
import {Workbox} from 'workbox-window';

function component() {
    const element = document.createElement('div');
  
    // Lodash, imported above, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());

  if('serviceWorker' in navigator){
    const wb=new Workbox('./sw.js');
    wb.register();
  }
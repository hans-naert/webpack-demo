import _ from 'lodash';

function component() {
    const element = document.createElement('div');
  
    // Lodash, imported above, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
  document.body.appendChild(component());
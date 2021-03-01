// import {} from '../../../common/app-style/vars';

import serverConfig from '../../server-config';

// from https://codepen.io/cassidoo/pen/KRdLvL
function getStyles() {
  return `
    <style>
      .PreLoader {
        position: absolute;
        height: 100%;
        width: 100%;
        background: white;
        z-index: 1000;
      }
      .PreLoader--inner {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
      }
      
      .PreLoader--dash {
        margin: 0 15px;
        width: 35px;
        height: 15px;
        border-radius: 8px;
        background: #0800ff;
        box-shadow: 0 0 10px 0 #FECDFF;
      }
      
      .PreLoader--one {
        margin-right: -18px;
        transform-origin: center left;
        animation: spin 3s linear infinite;  
      }
      
      .PreLoader--two {
        transform-origin: center right;
        animation: spin2 3s linear infinite;
        animation-delay: .2s;
      }
      
      .PreLoader--tree {
        transform-origin: center right;
        animation: spin3 3s linear infinite;
        animation-delay: .3s;
      }
      
      .PreLoader--four {
        transform-origin: center right;
        animation: spin4 3s linear infinite;
        animation-delay: .4s;
      }
      
      @keyframes spin {
        0% {
          transform: rotate(0deg);
        }
        25% {
          transform: rotate(360deg);
        }
        30% {
          transform: rotate(370deg);
        }
        35% {
          transform: rotate(360deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      
      @keyframes spin2 {
        0% {
          transform: rotate(0deg);
        }
        20% {
          transform: rotate(0deg);
        }
        30% {
          transform: rotate(-180deg);
        }
        35% {
          transform: rotate(-190deg);
        }
        40% {
          transform: rotate(-180deg);
        }
        78% {
          transform: rotate(-180deg);
        }
        95% {
          transform: rotate(-360deg);
        }
        98% {
          transform: rotate(-370deg);
        }
        100% {
          transform: rotate(-360deg);
        }
      }
      
      @keyframes spin3 {
        0% {
          transform: rotate(0deg);
        }
        27% {
          transform: rotate(0deg);  
        }
        40% {
          transform: rotate(180deg);
        }
        45% {
          transform: rotate(190deg);
        }
        50% {
          transform: rotate(180deg);
        }
        62% {
          transform: rotate(180deg);
        }
        75% {
          transform: rotate(360deg);
        }
        80% {
          transform: rotate(370deg);
        }
        85% {
          transform: rotate(360deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      
      @keyframes spin4 {
        0% {
          transform: rotate(0deg);
        }
        38% {
          transform: rotate(0deg);
        }
        60% {
          transform: rotate(-360deg);
        }
        65% {
          transform: rotate(-370deg);
        }
        75% {
          transform: rotate(-360deg);
        }
        100% {
          transform: rotate(-360deg);
        }
      }
    </style>
  `;
}

function getHtml() {
  return `
    <div id="${serverConfig.common.features.preLoader.domId}" class="PreLoader">
      <div class="PreLoader--inner">
        <div class="PreLoader--dash PreLoader--one"></div>
        <div class="PreLoader--dash PreLoader--two"></div>
        <div class="PreLoader--dash PreLoader--tree"></div>
        <div class="PreLoader--dash PreLoader--four"></div>      
      </div>  
    </div>
  `;
}

export default function defaultPreLoader(state, i18n) {
  return `
    ${getStyles()}
    ${getHtml()}
  `;
}
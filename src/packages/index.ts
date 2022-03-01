
  import { App } from 'vue';
  import '@/assets/font/eva-icons.css';

  import ActionSheet from '@p/ActionSheet/index';
  import Avatar from '@p/Avatar/index';
  import Button from '@p/Button/index';
  import Cell from '@p/Cell/index';
  import Icon from '@p/Icon/index';
  import Loading from '@p/Loading/index';
  import Overlay from '@p/Overlay/index';
  import Pin from '@p/Pin/index';
  import Popover from '@p/Popover/index';
  import Popup from '@p/Popup/index';
  import Slider from '@p/Slider/index';
  import Toast from '@p/Toast/index';
  
  const components = [
  ActionSheet, Avatar, Button, Cell, Icon, Loading, Overlay, Pin, Popover, Popup, Slider, Toast, 
];


  function install(app: App) {
    components.forEach((component) => {
      app.use(component);
    });
  }

  export default { install, version: '1.0.0-beta.1' };

  
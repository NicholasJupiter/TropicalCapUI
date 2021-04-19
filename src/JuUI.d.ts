import { TLoadingOptions } from 'pack/loading/src/types';
import { TToastOptions } from './packages/toast/src/types';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $loading: {
      service: (options?: TLoadingOptions) => void;
      close: () => void;
    };
    $toast: {
      show: (options?: TToastOptions) => void;
      close: () => void;
    };
    [key: string]: any;
  }
}

declare global {
  interface Window {
    [name: string]: any;
  }
}

import { TLoadingOptions } from './packages/Loading/src/types.d';
import { TToastOptions } from './packages/Toast/src/types';

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $loading: {
      service: (options?: TLoadingOptions) => void;
      close: () => void;
    };
    $toast: {
      show: (options?: TToastOptions | JSX.Element | VNode | string) => void;
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

export type TRect = {
  bottom: number;
  left: number;
  right: number;
  top: number;
  width: number;
  height: number;
};

export type TObject = { [key: string]: any };

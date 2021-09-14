import type { ComponentInternalInstance, VNode } from 'vue';

export type TToastOptions = Partial<{
  content: string | VNode | JSX.Element;
  location?: 'bottom' | 'top';
  offset?: string;
  duration?: number;
  showClose?: boolean;
  clickFn?: (toastInstance: ComponentInternalInstance) => void;
  showFn?: (toastInstance: ComponentInternalInstance) => void;
  closeFn?: (toastInstance: ComponentInternalInstance) => void;
}>;

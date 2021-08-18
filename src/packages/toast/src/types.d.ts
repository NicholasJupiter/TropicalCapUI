import { ComponentInternalInstance, VNode } from 'vue';

export type TToastOptions = Partial<{
  content: string | VNode;
  // afterIcon: string;
  // beforeIcon: string;
  location: 'bottom' | 'top';
  offset: string;
  duration: number;
  showClose: boolean;
  clickFn: (toastInstance: ComponentInternalInstance) => void;
}>;

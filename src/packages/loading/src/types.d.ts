import { VNode } from 'vue';

export type TLoadingOptions = Partial<{
  content: string | VNode | JSX.Element;
  color: string;
  size: number;
  modal: boolean;
}>;

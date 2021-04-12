import { VNode } from "vue";

export type TLoadingOptions = Partial<{
  content: string | VNode;
  color: string;
  size: number;
  mask: boolean;
}>;

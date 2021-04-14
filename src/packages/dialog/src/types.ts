import { VNode } from "vue";

export type TDialogOptions = Partial<{
  content: string | VNode;
  // confirm
}>
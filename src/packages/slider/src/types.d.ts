export type TRect = {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 0;
  height: 0;
};
export type TSliderType = 'simple' | 'round';

export type TTouchType = 'min' | 'max';

export type TSliderValue = { min: number; max: number };

export type TSliderState = 'draging' | 'drag-start' | 'drag-end' | 'click';

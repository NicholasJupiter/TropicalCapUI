import { TObject, TRect } from '@/JuUI';
import { TPlacement } from '@/packages/Popover/src/types';

const originX: TObject = {
  left: 'right',
  right: 'left',
  top: 'bottom',
  bottom: 'top'
};
const originY: TObject = {
  horizontal: {
    start: 'left',
    end: 'right'
  },
  vertical: {
    start: 'top',
    end: 'bottom'
  }
};

export function updatePopper(
  referEl: HTMLElement,
  popperEl: HTMLElement,
  options: { placement: TPlacement }
) {
  const { scrollTop, scrollLeft } = document.body;
  const popoverStyle: TObject = {
    top: 0,
    left: 0,
    transformOrigin: 'top center'
  };
  const { placement } = options;

  const {
    top,
    left,
    width,
    height
  } = referEl?.getBoundingClientRect() as TRect;

  popperEl.style.display = 'block';
  const {
    height: pHeight,
    width: pWidth
  } = popperEl?.getBoundingClientRect() as TRect;
  popperEl.style.display = 'none';
  const [xAxis, yAxis] = placement.split('-');
  if (xAxis === 'left') {
    popoverStyle.left = left;
  } else if (xAxis === 'right') {
    popoverStyle.left = width + left;
  } else if (xAxis === 'bottom') {
    popoverStyle.top = height + top;
  } else if (xAxis === 'top') {
    popoverStyle.top = top - pHeight;
  }
  let _axis = left;
  let _size = pWidth;
  let _origin = 'left';
  let _refSize = width;

  if (['left', 'right'].includes(xAxis)) {
    _axis = top;
    _size = pHeight;
    _refSize = height;
    _origin = 'top';
  }

  if (yAxis === 'start') popoverStyle[_origin] = _axis;
  else if (yAxis === 'end') popoverStyle[_origin] = _axis - _size + _refSize;
  else popoverStyle[_origin] = _axis - _size / 2;

  const getYOrigin =
    originY[['left', 'right'].includes(xAxis) ? 'vertical' : 'horizontal'][
      yAxis
    ] || 'center';

  return {
    top: scrollTop + popoverStyle.top + 'px',
    left: scrollLeft + popoverStyle.left + 'px',
    transformOrigin: `${originX[xAxis]} ${getYOrigin}`
  };
}

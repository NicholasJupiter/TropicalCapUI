import { App, DefineComponent } from 'vue';

export const componentMixins = {
  computed: {
    name(context: DefineComponent) {
      return context.$.type.name;
    }
  }
};

export function getComponentName(afterName: string) {
  return 'cap-' + afterName;
}

/**
 * 挂载组件, 添加install方法
 * @param component 组件
 * @param call 回调
 * @returns
 */
export function install(
  component: DefineComponent<{}, {}, any>,
  call?: (Vue: App, component: DefineComponent<{}, {}, any>) => void
) {
  return {
    install: function (Vue: App) {
      Vue.component(component.name, component);
      call && call(Vue, component);
    }
  };
}

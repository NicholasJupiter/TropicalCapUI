import { App, DefineComponent } from 'vue';

export const componentMixins = {
  computed: {
    name(context: DefineComponent) {
      return context.$.type.name;
    }
  }
};

export function getComponentName(afterName: string) {
  return 'ju-' + afterName;
}

export function install(
  component: DefineComponent,
  call?: (Vue: App, component: DefineComponent) => void
) {
  component.install = function (Vue: App) {
    Vue.component(component.name, component);
    call && call(Vue, component);
  };
  return component;
}

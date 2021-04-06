export function getComs() {
  const modules = import.meta.globEager('/src/packages/*/index.ts');
  const rets: { [key: string]: any } = {};
  for (const path in modules) {
    const { default: _ } = modules[path];
    _ && (rets[getName(path)] = _);
  }
  return rets;
}

export function getComsByMd() {
  const modules = import.meta.globEager('/src/packages/*/preview.md');
  const rets: { [key: string]: any } = {};
  for (const path in modules) {
    const { default: _ } = modules[path];
    _ (rets[getName(path)] = _);
  }
  return rets;
}

export function getComsByDemo() {
  const modules = import.meta.globEager('/src/packages/*/preview.vue');
  const rets: { [key: string]: any } = {};
  for (const path in modules) {
    const { default: _ } = modules[path];
    _ (rets[getName(path)] = _);
  }
  return rets;
}

export function getName (path: string) {
  return (/packages\/([^/]*)/.exec(path) as string[])[1];
}

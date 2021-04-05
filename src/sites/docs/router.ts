import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const previews = import.meta.glob('/src/packages/*/preview.vue');

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'docs',
    component: () => import('docs/views/Index.vue')
  }
];

for (const path in previews) {
  const name = (/packages\/(.*)\/preview/.exec(path) as string[])[1];
  routes.push({
    name,
    path: '/' + name,
    component: previews[path]
  });
}

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

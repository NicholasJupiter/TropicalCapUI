import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const previews = import.meta.glob('/src/packages/*/preview.vue');
const children: RouteRecordRaw[] = [];
for (const path in previews) {
  const name = (/packages\/(.*)\/preview/.exec(path) as string[])[1];
  children.push({
    name,
    path: '/' + name,
    component: previews[path]
  });
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@mobile/views/Index.vue'),
    children
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

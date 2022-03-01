import { getName } from '@/util/package';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const previews = import.meta.glob('/src/packages/*/preview.md');
const children: RouteRecordRaw[] = [];

for (const path in previews) {
  const name = getName(path);
  children.push({
    name,
    path: '/' + name,
    component: previews[path]
  });
}

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'docs',
    component: () => import('@docs/views/Index.vue'),
    children
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;

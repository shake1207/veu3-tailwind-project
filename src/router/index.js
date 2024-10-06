import { createRouter, createWebHistory } from 'vue-router';
import CharacteristicView from '@/views/CharacteristicView.vue';
import StoryView from '@/views/StoryView.vue';
import Photos from '@/views/PhotosView.vue';
import Crisis from '@/views/CrisisView.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: CharacteristicView,
    },
    {
      path: '/characteristic',
      name: 'characteristic',
      component: CharacteristicView,
    },
    {
      path: '/story',
      name: 'story',
      component: StoryView,
    },
    {
      path: '/photos',
      name: 'photos',
      component: Photos,
    },
    {
      path: '/crisis',
      name: 'crisis',
      component: Crisis,
    },
  ],
});

export default router;

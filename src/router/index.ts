import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Users from '../views/Users.vue';
import User from '../views/User.vue';
import UserProfile from '../views/UserProfile.vue';
import UserPosts from '../views/UserPosts.vue';
import Post from '../views/Post.vue';
import PageNotFound from '../views/PageNotFound.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  linkExactActiveClass: 'is-exact-active',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/users/:userId',
      component: User,
      children: [
        {
          path: 'profile',
          component: UserProfile
        },
        {
          path: 'posts',
          component: UserPosts
        }
      ]
    },
    {
      path: '/users/:userId/posts/:postId',
      component: Post
    },
    {
      path: '*',
      component: PageNotFound
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return {x: 0, y: 0};
  }
});

import Home from 'components/Home/Home';
import Posts from 'components/Posts/Posts';
import Post from 'components/Posts/Post';
import CreatePost from 'components/Posts/CreatePost';
import EditPost from 'components/Posts/EditPost';
import NotFound from 'components/NotFound/NotFound';
import Test from 'components/Posts/test';


const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/posts',
    component: Posts
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/posts/create',
    name: 'createPost',
    component: CreatePost
  },
  {
    path: '/post/:id',
    name: 'post',
    component: Post
  },
  {
    path: '/post/:id/edit',
    name: 'editPost',
    component: EditPost
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;

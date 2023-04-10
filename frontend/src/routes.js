import Home from 'components/Home/Home';
import NotFound from 'components/NotFound/NotFound';
import Categories from 'components/Categories/Categories';
import Category from 'components/Categories/Category';
import EditCategory from 'components/Categories/EditCategory';
import CreateCategory from 'components/Categories/CreateCategory';

import Tags from 'components/Tags/Tags';
import Tag from 'components/Tags/Tag';
import EditTag from 'components/Tags/EditTag';
import CreateTag from 'components/Tags/CreateTag';

import Clips from 'components/Clips/Clips';
import Clip from 'components/Clips/Clip';
import EditClip from 'components/Clips/EditClip';
import CreateClip from 'components/Clips/CreateClip';

import Videos from 'components/Videos/Videos';
import Video from 'components/Videos/Video';
import EditVideo from 'components/Videos/EditVideo';
import CreateVideo from 'components/Videos/CreateVideo';
import Test from 'components/Posts/Test';
import Test2 from 'components/Posts/Test2';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/categories',
    name: 'Categories',
    component: Categories
  },
  {
    path: '/category/:id',
    name: 'category',
    component: Category
  },
  {
    path: '/category/:id/edit',
    name: 'editCategory',
    component: EditCategory
  },
  {
    path: '/categories/create',
    name: 'createCategory',
    component: CreateCategory
  },
  {
    path: '/tags',
    name: 'Tags',
    component: Tags
  },
  {
    path: '/tag/:id',
    name: 'tag',
    component: Tag
  },
  {
    path: '/tag/:id/edit',
    name: 'editTag',
    component: EditTag
  },
  {
    path: '/tag/create',
    name: 'createTag',
    component: CreateTag
  },
  {
    path: '/clips',
    name: 'Clips',
    component: Clips
  },
  {
    path: '/clip/:id',
    name: 'clip',
    component: Clip
  },
  {
    path: '/clip/:id/edit',
    name: 'editClip',
    component: EditClip
  },
  {
    path: '/clip/create',
    name: 'createClip',
    component: CreateClip
  },
  {
    path: '/videos',
    name: 'Videos',
    component: Videos
  },
  {
    path: '/video/:id',
    name: 'video',
    component: Video
  },
  {
    path: '/video/:id/edit',
    name: 'editVideo',
    component: EditVideo
  },
  {
    path: '/video/create',
    name: 'createVideo',
    component: CreateVideo
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/test2',
    component: Test2
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;

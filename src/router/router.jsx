/**
 * @desc 路由组件页面(一般情况下路由在此页面更改即可)
 * @author lsy
 * 
 * @param {boolean} [hideChildren] - 左侧菜单该条目下所有均不显示
 * @param {boolean} [hideInMenu] - 左侧菜单中单条不显示
 * @param {boolean} [single] - 是否不使用公共组件
 * 
 * @fires 404需单独处理
 */

import Home from '@/containers/Home';

import FriendLink from '@/containers/Pages/FriendLink';

//single router
import Login from '@/containers/Pages/Login';
import NotFound from '@/containers/NotFound';

const router = [
	{
		name: '首页',
		path: '/',
		component: Home,
		type: 'admin-icon-liebiao'
	},
	{
		name: '友情链接',
		path: '/FriendLink',
		component: FriendLink,
		type: 'el-icon-star-on'
	},
	//single router
	{
		name: '登录',
		path: '/Login',
		component: Login,
		single: true,
		hideInMenu: true
	},
	//404单独处理
	{
		name: '404',
		path: '/404',
		component: NotFound,
		single: true,
		hideInMenu: true
	}
];

export default router;

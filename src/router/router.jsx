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
import Icons from '@/containers/Pages/Icons';

import User from '@/containers/Pages/User';
import CreateUser from '@/containers/Pages/User/CreateUser';
import Jurisdiction from '@/containers/Pages/Jurisdiction';
import UpLoad from '@/containers/Pages/UpLoad';
import UpLoadExcel from '@/containers/Pages/Excel/UpLoadExcel';
import DownLoadExcel from '@/containers/Pages/Excel/DownLoadExcel';
import Part1_1 from '@/containers/Pages/Part/Part1/Part1_1';
import Part1_2 from '@/containers/Pages/Part/Part1/Part1_2';
import Part2 from '@/containers/Pages/Part/Part2';
import Quill from '@/containers/Pages/Quill';
import PersonInfo from '@/containers/Pages/SetUp/PersonInfo';
import FriendLink from '@/containers/Pages/FriendLink';

//single router
import Login from '@/containers/Pages/Login';
import ForgetPwd from '@/containers/Pages/ForgetPwd'
import NotFound from '@/containers/NotFound';

const router = [
	{
		name: '首页',
		path: '/',
		component: Home,
		type: 'admin-icon-liebiao'
	},
	{
		name: '图标库',
		path: '/Icons',
		component: Icons,
		type: 'admin-icon-tiaoshi'
	},
	{
		name: '用户组',
		path: '/User',
		component: User,
		type: 'admin-icon-icon_zhanghao',
		hideChildren: true,
		children: [
			{
				name: '新建用户',
				path: '/CreateUser',
				component: CreateUser,
				hideInMenu: true
			}
		]
	},
	{
		name: '用户权限',
		path: '/Jurisdiction',
		component: Jurisdiction,
		type: 'admin-icon-zuzhiqunzu'
	},
	{
		name: '上传',
		path: '/UpLoad',
		component: UpLoad,
		type: 'el-icon-upload'
	},
	{
		name: 'Excel',
		path: '/Excel',
		type: 'admin-icon-biaodanzujian-biaoge',
		children: [
			{
				name: '导入Excel',
				path: '/UpLoadExcel',
				component: UpLoadExcel
			},
			{
				name: '导出Excel',
				path: '/DownLoadExcel',
				component: DownLoadExcel
			}
		]
	},
	{
		name: '多级菜单',
		path: '/Part',
		type: 'admin-icon-youxupailie',
		children: [
			{
				name: '多级菜单1',
				path: '/Part1',
				children: [
					{
						name: '多级菜单1-1',
						path: '/Part1_1',
						component: Part1_1
					},
					{
						name: '多级菜单1-2',
						path: '/Part1_2',
						component: Part1_2
					}
				]
			},
			{
				name: '多级菜单2',
				path: '/Part2',
				component: Part2
			}
		]
	},
	{
		name: '富文本编辑器',
		path: '/Quill',
		component: Quill,
		type: 'admin-icon-tianxie'
	},
	{
		name: '个人设置',
		path: '/SetUp',
		type: 'el-icon-setting',
		children: [
			{
				name: '个人信息',
				path: '/PersonInfo',
				component: PersonInfo
			}
		]
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
    {
        name: '忘记密码',
        path: '/ForgetPwd',
        component: ForgetPwd,
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

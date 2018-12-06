/**
 * @desc 路由组件页面(一般情况下路由在此页面更改即可)
 * @author lsy
 * 
 * @param {boolean} [hideChildren] - 左侧菜单该条目下所有均不显示
 * @param {boolean} [hideInMenu] - 左侧菜单中单条不显示
 */

import Home from '@/containers/Home';
import User from '@/containers/Pages/User'
import UserInfo from '@/containers/Pages/User/UserInfo'
import Jurisdiction from '@/containers/Pages/Jurisdiction'
import Part1_1 from '@/containers/Pages/Part/Part1/Part1_1'
import Part1_2 from '@/containers/Pages/Part/Part1/Part1_2'
import Part2 from '@/containers/Pages/Part/Part2'
import FriendLink from '@/containers/Pages/FriendLink'

const router = [
    {
        name: "首页",
        path: "/",
        component: Home,
        type: "el-icon-information"
    },
    {
        name: "用户组",
        path: "/User",
        component: User,
        type: "el-icon-menu",
        hideChildren: true, 
        children: [
            {
                name: "新建用户",
                path: "/UserInfo",
                component: UserInfo,
                hideInMenu: true
            }
        ]
    },
    {
        name: "用户权限",
        path: "/Jurisdiction",
        component: Jurisdiction,
        type: "el-icon-setting"
    },
    {
        name: "多级菜单",
        path: "/Part",
        type: "el-icon-share",
        children: [
            {
                name: "多级菜单1",
                path: "/Part1",
                children: [
                    {
                        name: "多级菜单1-1",
                        path: "/Part1_1",
                        component: Part1_1
                    },
                    {
                        name: "多级菜单1-2",
                        path: "/Part1_2",
                        component: Part1_2
                    }
                ]
            },
            {
                name: "多级菜单2",
                path: "/Part2",
                component: Part2
            },
        ]
    },
    {
        name: "友情链接",
        path: "/FriendLink",
        component: FriendLink,
        type: "el-icon-star-on"
    },
]

export default router
import {
    observable,
    computed
} from 'mobx';
import routeLink from '../router/router.jsx';

import {
    recursion
} from '@/libs/utils';

class Router {
    @observable.ref routerArr = routeLink;
    @observable routerPath = "/";
    @observable.ref routerName = [];

    @observable.ref ADMIN_ROUTER = {
        //正常路由
        defaultRouter: [],
        //single路由
        singleRouter: []
    }
    //侧边栏默认选中
    @observable defaultActive = "/"

    @computed
    get distributeRouter() {
        recursion(routeLink).map(item => {
            if (item.single) {
                this.ADMIN_ROUTER.singleRouter.push(item)
            } else {
                this.ADMIN_ROUTER.defaultRouter.push(item)
            }
        })
        return this.ADMIN_ROUTER
    }

}

export default new Router()
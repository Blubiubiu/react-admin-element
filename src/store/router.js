import { observable, action } from 'mobx';
import routeLink from '../router/router.jsx';

class Router {
    @observable.ref routerArr = routeLink;
    @observable routerPath = "/";
    @observable.ref routerName = [];
    //侧边栏默认选中
    @observable defaultActive = "/"

    @action.bound
    setRouterPath(val) {
        this.routerPath = val
    }
}

export default new Router()
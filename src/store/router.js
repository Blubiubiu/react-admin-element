import { observable, action } from 'mobx';
import routeLink from '../router/router.jsx';

class Router {
    @observable.ref routerArr = routeLink;
    @observable routerPath = "/";
    @observable.ref routerName = [];

    @action.bound
    setRouterPath(val) {
        this.routerPath = val
    }
}

export default new Router()
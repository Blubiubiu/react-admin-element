import {
    observable,
    action
} from 'mobx'

class Global {
    @observable style = null;

    @action.bound
    setStyle(val) {
        console.log(val)
        this.style = val
    }
}

export default new Global()
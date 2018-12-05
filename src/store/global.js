import { observable, action } from 'mobx'

class Global {
    @observable id = '111';

    @action.bound
    setId () {
        this.id = '222'
    }
}

export default new Global()
import {
    observable,
    action
} from 'mobx'
import defaultUrl from '@/assets/images/default_head_img.png'
class User {
    id = Math.random();
    @observable name = "admin"
    @observable address = "北京"
    @observable sex = "male"
    @observable headPortraitUrl = defaultUrl;
    @action.bound
    setUser(user) {
        let keys = Object.keys(user)
        keys.forEach(key => {
            if (this.hasOwnProperty(key)) {
                this[key] = user[key]
            }
        })
    }
}

export default new User();
import { observable, computed, action } from 'mobx';
import moment from 'moment';

// switch to cn
moment.locale('zh-cn');

class AppStore {
    @observable selectedDate = moment()

    @computed get today() {
        return this.selectedDate.format();
    }

    @computed get tomorrow() {
        return this.selectedDate.clone().add(1, 'days').format();
    }

    @action.bound
    selectDate(date) {
        this.selectedDate = date;
    }
};

const appStore = new AppStore();

export default appStore;

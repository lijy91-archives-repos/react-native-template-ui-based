import { observable, action } from 'mobx';

class InitializeScreenStore {
  @observable hasLogged = false;

  @action init() {
    this.hasLogged = false;
  }
}

export default InitializeScreenStore;

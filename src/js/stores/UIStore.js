import { observable } from 'mobx'

class UIStore {
  @observable hasPopup = false;

  togglePopup() {
    // console.log("触发toggle, 当前", this.hasPopup); 
    this.hasPopup = !this.hasPopup;
    // console.log("触发toggle, 改后", this.hasPopup); 
  }

}

export default new UIStore();
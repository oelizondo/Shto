class Shto {
  constructor(trigger, action, domElements) {
    this.trigger     = trigger
    this.action      = action
    this.domElements = domElements
  }

  listen () {
    if (typeof window.sessionStorage == 'undefined' || typeof window.localStorage == 'undefined') {
      throw 'sessionStorage is not enabled / supported'
    }
    else {
      const trigger = document.findElementById(this.trigger)
      trigger.addEventListener(this.action, captureData)

    }
  }

  addValue(element) {
    if (typeof element == 'string') this.domElements.push(element)
    return true;
  }

  captureData() {
    this.domElements.forEach(function(domElement){
      window.sessionStorage.setItem(domElement, document.getElementById(domElement).value)
    })
  }


}

const sess = new Shto('save', 'click', ['button1', 'button2', 'button3']);
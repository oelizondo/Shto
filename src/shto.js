class Shto {
  constructor(trigger, action, domElements) {
    this.action      = action
    this.trigger     = trigger
    this.domElements = domElements
  }

  listen () {
    if (typeof window.sessionStorage != "undefined") {

      const trigger = document.getElementById(this.trigger)
      trigger.addEventListener(this.action, () => { this.captureData(this.domElements) })
      this.viewChangeListener();

    } else {

      throw "sessionStorage is not enabled / supported."

    }
  }

  addValue(element) {
    if (typeof element == "string") this.domElements.push(element)
    return true;
  }

  captureData(domElements) {
    domElements.forEach(function(domElement){
      if (domElement.value != "undefined") {

        window.sessionStorage.setItem(domElement, document.getElementById(domElement).value)

      } else {

        throw "This element doesn't exist."

      }
    })
  }

  returnData(domElements) {
    domElements.forEach((domElement) => {
      if (domElement.value != "undefined") {

        document.getElementById(domElement.value(window.sessionStorage.getItem(domElement)))

      } else {

        throw "This element doesn't exist."

      }
    })
  }

  viewChangeListener() {
    if (document.getElementById('form').length) {
      this.returnData(this.domElements)
    }
  }




}

const sess = new Shto('save', 'click', 'form', ['button1'])
sess.listen()
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

    } else if (typeof window.sessionStorage != "undefined"){

      throw "sessionStorage is not enabled / supported."

    }
      
    window.onload = this.returnData(this.domElements)
  }

  addValue(element) {
    if (typeof element == "string") this.domElements.push(element)
    return true;
  }

  captureData(domElements) {
    domElements.forEach((domElement) => {
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

        const formField = document.getElementById(domElement)
        formField.value = window.sessionStorage.getItem(domElement)

      } else {

        throw "This element doesn't exist."

      }
    })
  }

  resetForm(resetElement) {
    let resetButton = document.getElementById(resetElement)

    resetButton.addEventListener(this.action, () => {
      this.domElements.forEach((domElement) => {
        const formField = document.getElementById(domElement)
        formField.value = ""
        window.sessionStorage.setItem(domElement, formField.value)
      })
    })
  }

  resetSessionStorage() {
    window.sessionStorage.clear()
  }

}
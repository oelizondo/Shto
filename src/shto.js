class Shto {
  constructor(action, trigger, domElements) {
    this.trigger     = trigger
    this.action      = action
    this.domElements = domElements
  }

  listen () {
    if (typeof window.sessionStorage != "undefined") {

      const trigger = document.getElementById(this.trigger)
      trigger.addEventListener(this.action, () => { this.captureData(this.domElements) })

    } else {

      throw "sessionStorage is not enabled / supported."

    }
      
    window.onload = this.returnData(this.domElements)
  }

  addValue(element) {
    typeof element == "string" ? this.domElements.push(element) : throw 'Not a valid element.'
  }

  captureData(domElements) {
    domElements.forEach((domElement) => {
      domElement.value != "undefined" ? window.sessionStorage.setItem(domElement, document.getElementById(domElement).value) : throw "This element doesn't exist."
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

}
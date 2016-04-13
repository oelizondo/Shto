class Shto {
  constructor(trigger, action) {
    this.trigger = trigger
    this.action  = action
  }

  listen () {
    if (typeof window.sessionStorage == 'undefined') {
      throw 'sessionStorage is not enabled / supported'
    }
    else {
      console.log('listening')
    }
  }
}

const storage = new Shto('hello', 'world')
storage.listen();
## Shto

local/session Storage Wrapper and useful methods.

### How it works

```javascript
  var viewStorage = new Shto('save', 'click', ['button1', 'button2']);

  viewStoreage.listen()
```

Declare a new ```Shto``` object with the element that will save the form elements, and an action (can be ```scroll```, ```click```, etc).
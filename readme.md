## Shto

A nice minimalist wrapper that uses sessionStorage to save forms from being reset on page refresh or view changes.

### Perks

* ~70 lines of code.
* No jQuery required. (Whaaaaat).

### How it works

Just declare your now Shto object with an action, the element that will use that action and the fields of your form that will be saved.
Kind of like ```click``` ```save``` on ```yourelements```.

```javascript
  var viewStorage = new Shto('click', 'save', ['field1', 'field2']);

  viewStoreage.listen();
```

### API methods
```javascript
  var sess = new Shto('click', 'save', ['field1', 'field2', 'field3']);

  sess.listen(); //listens to the action to capture the data.

  sess.addValue('field4'); // add a value that will be saved.

  sess.resetForm('resetButton'); // resets the form and clear storage.

```
## Shto

A nice, minimalist wrapper that uses sessionStorage to save forms from being reset on page refresh or view changes.

### Perks

* ~60 lines of code.
* No jQuery required. (Whaaaaat).

### How it works

Just declare your new Shto object with an action, the element that will use that action and the fields of your form that will be saved.
Kind of like ```click``` ```save``` on ```yourelements```.

```javascript
  var formSaver = new Shto('click', 'save', ['field1', 'field2']);

  formSaver.listen();
```

### API methods
```javascript
  var formSaver = new Shto('click', 'save', ['field1', 'field2', 'field3']);

  formSaver.listen(); //listens to the action to capture the data.

  formSaver.addValue('field4'); // add a value that will be saved.

  formSaver.resetForm('resetButton'); // resets the form and clear storage.

```

### Caveats
Reports tell us that shto can cause conflicts with jQuery, but it's 2016 and nobody uses jQuery anymore :P

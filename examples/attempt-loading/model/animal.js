define(["i18n!nls/strings"], function (strings) {

  function Animal(name) {
    this.name = name || "Unknown";
    console.log(strings.AnimalBorn.replace("{0}", this.name));
  }

  Animal.prototype = {

    name: undefined,

    die: function () {
      console.log(strings.AnimalDied.replace("{0}", this.name));
    }

  };

  return Animal;

});

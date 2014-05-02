require.config({
  config: {
    i18n: { locale: "de-de" }
  }
});

require(["model/animal"], function (Animal) {

  var cat = new Animal('Cat');
  cat.die();

});

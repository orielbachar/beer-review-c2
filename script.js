//Beer-Rewview-Project

var BeerReviewApp = function(){
  var beers = [];
  function beer(name, category, rate){
    this.name = name;
    this.category = category;
    this.rate = rate;
  };

  var addBeer = function(name, category, rate){

    var beer1 = new beer(name, category, rate);
    beers.push(beer1);
    $('.beer-input').val('');
    $('.category-input').val('');
 
  };

  var renderBeers = function(){
    $('.beers-list').find('li').remove();
    for (var i = 0; i<beers.length; i++){
      $('.beers-list').append('<li>' + beers[i].name + " "  + beers[i].category + " " + beers[i].rate + '</li>');
    }
  };

  return {
    addBeer: addBeer,
    renderBeers: renderBeers
  };
};

  var app = BeerReviewApp();

$('.post-beer').click(function(){
  app.addBeer($('.beer-input').val(), $('.category-input').val(), $('.select-input').val());
  app.renderBeers();
});

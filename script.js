//Beer-Rewview-Project
function beer(name, category, rate){
  this.name = name;
  this.category = category;
  this.rate = rate;
};

var beers = [];

var addBeer = function(name, category, rate){

  var beer1 = new beer(name, category, rate);
  beers.push(beer1);
  $('.beer-input').val('');
  $('.category-input').val('');
  $('.select-input').val('');

};

var updateBeers = function(){
  $('.beers-list').find('li').remove();
  for (var i = 0; i<beers.length; i++){
    $('.beers-list').append('<li>' + beers[i].name + " "  + beers[i].category + " " + beers[i].rate + '</li>');
  }
};

$('.post-beer').click(function(){
  addBeer($('.beer-input').val(), $('.category-input').val(), $('.select-input').val());
  updateBeers();
});

$('.select-beer').click(function(){


}

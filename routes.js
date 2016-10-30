
Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', function() {
    this.render('home');
});

Router.route('/projects', function() {
  this.render('projects');
});

Router.route('/news', function(){
  this.render('news');
});

import DS from "ember-data";

// export default DS.Model.extend({
//   title: DS.attr('string'),
//   isCompleted: DS.attr('boolean')
// });


//anything in extend is an instance property and method and requires instantiation
var Todo = DS.Model.extend({
  title: DS.attr('string'),
  isCompleted: DS.attr('boolean')
});


//anything in reopen class is a static method which allows Ember to access regardless of instantiation
//http://discuss.emberjs.com/t/understanding-why-i-need-reopenclass/1480/3
Todo.reopenClass({
    FIXTURES: [
      {
        id: 1,
        title: 'Learn Ember.js',
        isCompleted: true
      },
      {
        id: 2,
        title: 'Learn ember-cli.js',
        isCompleted: false
      },
      {
        id: 3,
        title: 'Learn Ember testing',
        isCompleted: true
      }
    ]
})

export default Todo;

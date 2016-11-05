user = User.new
user.email = 'nathaniel@example.com'
user.password = 'valid_password'
user.password_confirmation = 'valid_password'
user.save!

Habit.create(name:'Smoking', user_id:1)
Habit.create(name:'Drinking Water', user_id:1)

Cue.create(name:'Work', nature:'Location', habit_id:1)
Cue.create(name:'Smoker Friends', nature:'Company', habit_id:1)
Cue.create(name:'Waking Up In the Moring', nature:'Time', habit_id:2)

Reward.create(craving:'Cigarette', habit_id:1)
Reward.create(craving:'Hydration', habit_id:2)

Experiment.create(habit_id:1, successful:false)
Experiment.create(habit_id:1)
Experiment.create(habit_id:2)

# Note: The following rewards represent subsitutions.
sub1 = Reward.create(craving:'Cookie', experiment_id:1)
sub2 = Reward.create(craving:'Social Interaction', experiment_id:2)
sub3 = Reward.create(craving:'Flavored Water', experiment_id:2)

action1 = Action.new(description:'Get a cookie from the vending machine')
action2 = Action.new(description:'Go for a walk outside')
action3 = Action.new(description:'Put a few drops of Mio in a glass of ice. Put on bedside table.')
action4 = Action.new(description:'Have a cookie eating contest.')

sub1.actions << action1
sub2.actions << action2
sub3.actions << action3
sub1.actions << action4
sub2.actions << action4

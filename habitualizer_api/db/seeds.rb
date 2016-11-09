user = User.new
user.email = 'a@a.com'
user.password = 'aaaaaa'
user.password_confirmation = 'aaaaaa'
user.save!

habit1 = Habit.create(name:'Smoking', user_id:1)
habit2 = Habit.create(name:'Drinking Water', user_id:1, complete:true)

habit1.cues << Cue.create(name:'Work', nature:'Location')
habit1.cues << Cue.create(name:'Smoker Friends', nature:'People')
habit2.cues << Cue.create(name:'Waking Up In the Moring', nature:'Time')

habit1.reward = Reward.create(craving:'Cigarette')
habit2.reward = Reward.create(craving:'Hydration')

exp1 = Experiment.create(habit_id:1, successful:false)
exp2 = Experiment.create(habit_id:1)
exp3 = Experiment.create(habit_id:2)

# Note: The following rewards represent subsitutions.
sub1 = Reward.create(craving:'Cookie')
exp1.substitute = sub1

sub2 = Reward.create(craving:'Social Interaction')
exp2.substitute = sub2

sub3 = Reward.create(craving:'Flavored Water')
exp3.substitute = sub3

activity1 = Activity.new(description:'Get a cookie from the vending machine')
activity2 = Activity.new(description:'Go for a walk outside')
activity3 = Activity.new(description:'Put a few drops of Mio in a glass of ice. Put on bedside table.')
activity4 = Activity.new(description:'Have a cookie eating contest.')

sub1.activities << activity1
sub2.activities << activity2
sub3.activities << activity3
sub1.activities << activity4
sub2.activities << activity4

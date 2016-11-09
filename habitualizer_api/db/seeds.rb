user = User.new
user.email = 'a@a.com'
user.password = 'aaaaaa'
user.password_confirmation = 'aaaaaa'
user.save!

habit1 = Habit.create(name:'Smoking', user_id:1)
habit2 = Habit.create(name:'Drinking Water', user_id:1, complete:true)

habit1.cue = Cue.create(name:'Work', nature:'Location')
habit1.cue = Cue.create(name:'Smoker Friends', nature:'People')
habit2.cue = Cue.create(name:'Waking Up In the Moring', nature:'Time')

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

activity1 = Activity.create(description:'Get a cookie from the vending machine')
activity2 = Activity.create(description:'Go for a walk outside')
activity3 = Activity.create(description:'Put a few drops of Mio in a glass of ice. Put on bedside table.')
activity4 = Activity.create(description:'Have a cookie eating contest.')

sub1.activities << activity1
sub2.activities << activity2
sub3.activities << activity3
sub1.activities << activity4
sub2.activities << activity4



Cue.create(name:"Applebee's", nature:'Location')
Cue.create(name:'Boston Pizza', nature:'Location')
Cue.create(name:'Cancun', nature:'Location')
Cue.create(name:'Denver', nature:'Location')
Cue.create(name:'Estonia', nature:'Location')
Cue.create(name:'Back Yard', nature:'Location')
Cue.create(name:"McDonald's", nature:'Location')
Cue.create(name:'Home', nature:'Location')
Cue.create(name:'Garage', nature:'Location')
Cue.create(name:'Work', nature:'Location')
Cue.create(name:'School', nature:'Location')
Cue.create(name:'Gym', nature:'Location')
Cue.create(name:"Girlfriend's House", nature:'Location')
Cue.create(name:"Boyfriend's House", nature:'Location')
Cue.create(name:'Kitchen', nature:'Location')
Cue.create(name:'Laundry Room', nature:'Location')
Cue.create(name:'On the Toilet', nature:'Location')

Cue.create(name:'Mom and Dad', nature:'People')
Cue.create(name:'Boyfriend', nature:'People')
Cue.create(name:'Girlfriend', nature:'People')
Cue.create(name:'Jeffrey', nature:'People')
Cue.create(name:'Librarian', nature:'People')
Cue.create(name:'Teacher', nature:'People')
Cue.create(name:'Co-worker', nature:'People')
Cue.create(name:'Boss', nature:'People')
Cue.create(name:'Dave', nature:'People')
Cue.create(name:'Pizza Delivery Boy', nature:'People')
Cue.create(name:'Jesus', nature:'People')
Cue.create(name:'Donald Trump', nature:'People')
Cue.create(name:'Coldplay', nature:'People')
Cue.create(name:'Wife', nature:'People')
Cue.create(name:'Drummer', nature:'People')
Cue.create(name:'Snowbunny', nature:'People')

Cue.create(name:'First Thing In The Morning', nature:'Time')
Cue.create(name:'Before Bed', nature:'Time')
Cue.create(name:'The Worst Possilbe Moment', nature:'Time')
Cue.create(name:'After Breakfast', nature:'Time')
Cue.create(name:'After Lunch', nature:'Time')
Cue.create(name:'After Dinner', nature:'Time')
Cue.create(name:'Middle of the Night', nature:'Time')
Cue.create(name:"When the Simpons Come's On", nature:'Time')
Cue.create(name:"Monday Night", nature:'Time')
Cue.create(name:"Sunday Afternoon", nature:'Time')
Cue.create(name:"After Work", nature:'Time')

Cue.create(name:"Tired", nature:'Emotion')
Cue.create(name:"Sad", nature:'Emotion')
Cue.create(name:"Depressed", nature:'Emotion')
Cue.create(name:"Anxious", nature:'Emotion')
Cue.create(name:"Excited", nature:'Emotion')
Cue.create(name:"Nervous", nature:'Emotion')
Cue.create(name:"Happy", nature:'Emotion')
Cue.create(name:"In Love", nature:'Emotion')
Cue.create(name:"Bored", nature:'Emotion')

Cue.create(name:"Getting Home From Work", nature:'Activity')
Cue.create(name:"Waking Up", nature:'Activity')
Cue.create(name:"Going to the Gym", nature:'Activity')
Cue.create(name:"Watching TV", nature:'Activity')
Cue.create(name:"Coding", nature:'Activity')
Cue.create(name:"Sleeping", nature:'Activity')
Cue.create(name:"Talking on the Phone", nature:'Activity')

Reward.create(craving:'Validation')
Reward.create(craving:'Relaxation')
Reward.create(craving:'Health')
Reward.create(craving:'Looking Good')
Reward.create(craving:'Fun')
Reward.create(craving:'Speed')

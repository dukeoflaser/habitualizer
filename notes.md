Note: A habit can have multiple successful experiments.
If any experiment is changed from successful to not, it will set the activity to empty.
It would be better, in the future, to look for a successful experiment and add it's activity and change it.
That will require changing activity associations.


///////////////////////DATA FORMAT///////////////////////
for new experiment
    // var data = {
    //   "experiment": {
    //     "habit_id": 2, //active_habit.id
    //     "successful": false,
    //     "substitute_attributes": {
    //       "craving": 'TEST BANANAS'
    //     }
    //   }
    // };


New Habit data structure:

var data = {
  "habit": {
    "user_id": 1,
    "name": 'TEST Habit',
    "complete": false,
    "cue_attributes": {
      "name": 'TEST Getting Home From Work',
      "nature": '3'
    },
    "reward_attributes": {
        "craving": "TEST Relaxation"
    },
    "activities_attributes": {
      "0": {
        "description": "TEST Jump on a trampoline."
      }
    }
  }
};


New Habit:
  -Create new habit name
  -Select/create cue
  -Select/create reward/craving.
  -Add to 'active habit' variable and set as default for creating experiment/edit habit.
  ----Note: need to get rid of habit_id on cue(gives us cue.habit which we don't need, only need habit.cue -> guess habit needs a cue id.) Same for reward.

New Experiment:
  -Select a habit from a list of some kind.
  -Select/create a substitute reward.
  -Successful attribute needs to be changed to default to false.
  -Edit to change it to true -> Update activity here. (Should have default activity)



Possible Models:

User
Area/Category/Tag
Routine
Habit

user.routines
user.habits


habit.cue
habit.reward
habit.actions




routine => An ordered list referencing the ids of actions, habits, and other routines.







Pages
  -Login
  -Profile -> This would be a list of 'cards' with a habit/routine to be executed.
  -New Page
  -Show Page for Habits
  -Show Page for Routines
  -Progress (Maybe this should be integrated into the Show Page)

  TODOs
  Fix problem on /home refresh where it stalls out due to user in-authentication.
    -Fix by restoring session capabilities to the rails api.
    -http://stackoverflow.com/questions/15342710/adding-cookie-session-store-back-to-rails-api-app
    -https://github.com/nakhli/angular_csrf
    -https://github.com/nakhli/angular_csrf
    -https://github.com/jsanders/angular_rails_csrf

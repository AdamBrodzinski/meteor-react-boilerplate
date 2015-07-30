# meteor-react-boilerplate
A starter project for React &amp; Meteor

This repo aims to get you up and running with with React with little effort. It has sane defaults that 
most apps will use (router, accounts, browserify).

Most of the content is in the 'both' folder so that we can so serverside rendering more easily. Here's the 
rundown on what's included.

See [this guide](http://react-in-meteor.readthedocs.org/en/latest/client-npm/) to learn how to import NPM modules/components via browserify in Meteor.

For an in-depth example of how to use Meteor with React see 
[React-ive Meteor](https://github.com/AdamBrodzinski/react-ive-meteor). For flux support see the [Flux Leaderboard](https://github.com/AdamBrodzinski/meteor-flux-leaderboard) example app.

#### Packages

- React (MDG preview)
- Flow Router
- React Layout
- Accounts Password
- Accounts UI (with React wrapper)
- meteorhacks:npm
- cosmos:browserify
- Removes insecure
- Removes autopublish

#### Components

- Header
- LoginButtons
- [Classnames](https://github.com/JedWatson/classnames) (NPM Component)

####Models
- User
- (See a more [complex example](https://github.com/AdamBrodzinski/react-ive-meteor/blob/master/both/models/post.js))

####Pages/Routes

- Home, About
- Not Found
- Main Layout

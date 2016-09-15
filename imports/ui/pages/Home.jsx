import React from 'react';
import classNames from 'classnames';

function Home() {
  return (
    <div className={classNames('Home', 'foo', 'bar')} >
      <h1>Welcome to Meteor!</h1>

      <p>
        See <a href="https://github.com/meteor/react-packages/blob/master/docs/client-npm.md">
        this guide</a> to learn how to import NPM modules/components via browserify in Meteor.
      </p>

      <p>
        For an in-depth example of how to use Meteor with React see <a href="https://github.com/AdamBrodzinski/react-ive-meteor">Reactive Meteor</a>. For flux support see the <a href="https://github.com/AdamBrodzinski/meteor-flux-leaderboard">Flux Leaderboard</a> example app.
      </p>

      <h4>Packages</h4>

      <ul>
        <li>React (MDG preview)</li>
        <li>Flow Router</li>
        <li>React Layout</li>
        <li>Accounts Password</li>
        <li>Accounts UI (with React wrapper)</li>
        <li>meteorhacks:npm</li>
        <li>cosmos:browserify</li>
        <li><b>Removes insecure</b></li>
        <li><b>Removes autopublish</b></li>
      </ul>

      <h4>Components</h4>
      <ul>
        <li>Header</li>
        <li>LoginButtons</li>
        <li>
          <a href="https://github.com/JedWatson/classnames">Classnames (NPM Component)</a>
        </li>
      </ul>

      <h4>Models</h4>
      <ul>
        <li>User</li>
        <li>See more a complex <a href="https://github.com/AdamBrodzinski/react-ive-meteor/blob/master/both/models/post.js">example</a></li>
      </ul>

      <h4>Pages/Routes</h4>
      <ul>
        <li>Home, About</li>
        <li>Not Found</li>
        <li>Main Layout</li>
      </ul>
    </div>
  );
}

export default Home;

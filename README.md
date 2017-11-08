# user-profile

A Node.js package that retrieves user profiles. A basic package for a scotch.io "Packaging an Npm Library" tutorial.

## Usage

First, install the package using npm:

    npm install user-profile --save

Then, require the package and use it like so:

    var profile = require('user-profile');

## Available Methods
`.github()` `.gitlab()` `.bitbucket()`

## Sample Implementation

#### profile.github("codediger")

Result: 

    { 
      login: 'codediger',
      id: 16918891,
      avatar_url: 'https://avatars3.githubusercontent.com/u/16918891?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/codediger',
      html_url: 'https://github.com/codediger',
      followers_url: 'https://api.github.com/users/codediger/followers',
      following_url: 'https://api.github.com/users/codediger/following{/other_user}',
      gists_url: 'https://api.github.com/users/codediger/gists{/gist_id}',
      starred_url: 'https://api.github.com/users/codediger/starred{/owner}{/repo}',
      subscriptions_url: 'https://api.github.com/users/codediger/subscriptions',
      organizations_url: 'https://api.github.com/users/codediger/orgs',
      repos_url: 'https://api.github.com/users/codediger/repos',
      events_url: 'https://api.github.com/users/codediger/events{/privacy}',
      received_events_url: 'https://api.github.com/users/codediger/received_events',
      type: 'User',
      site_admin: false,
      name: 'Orinami Olatunji',
      company: null,
      blog: 'orinamiolatunji.com',
      location: 'Lagos, Nigeria',
      email: null,
      hireable: true,
      bio: 'Front-end developer. @scotch-io Author',
      public_repos: 53,
      public_gists: 0,
      followers: 22,
      following: 17,
      created_at: '2016-01-27T12:57:56Z',
      updated_at: '2017-11-07T06:51:41Z' 
    }
      
### Try these
    profile.gitlab("seriyalexandrov");
    profile.bitbucket("orinami");

## License

MIT

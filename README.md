# user-profile

A Node.js package that retrieves user profiles. A basic package for a scotch.io "Packaging an Npm Library" tutorial.

## Usage

First, install the package using npm:

    npm install user-profile --save

Then, require the package and use it like so:

    var profile = require('user-profile');

    profile.github("codediger");
    profile.gitlab("seriyalexandrov");
    profile.bitbucket("orinami");

## License

MIT
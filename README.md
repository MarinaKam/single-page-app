## Test project

React Single Page Application demo that uses Github Gist API to show all public gists for an user.

### Description

ReactJS Single Page App demo which has the following features:

1. Search: When a user enters a username, it should be able to get a full list of public Gists by that user.
2. Filetype: Convert the filetypes of the files in the gist into a tag/badge, (e.g, if the returned gist has list of files containing python and javascript files, the gist should have the respective tags/badges).
3. Fork: Username/Avatar of the last 3 users who forked it with avatar linking to the fork.

### Libraries used

* create-react-app --template typescript
* styles - Material UI
* for api calls axios
* lint settings

### Getting Started and Installing

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

* First Git clone the repo into your computer

``` 
git clone https://github.com/MarinaKam/single-page-app.git
``` 

* Open your terminal

``` 
$ cd single-page-app
$ npm i
``` 

* Add `.env` file with this vars

``` 
REACT_APP_API_URL=https://api.github.com
TEST_API_URL=https://test.com
``` 

* This should install all the dependencies. Once done 
* Run pr

``` 
$ npm start
``` 
* Run tests

``` 
$ npm test
``` 

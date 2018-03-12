12 March 2018:

Time to work on the colour scheme. https://webaim.org/resources/contrastchecker/

8 March 2018:

All the interesting files are in /learn.

7 March 2018:

To create dist use parcel public/learn/learn.js;

6 march 2018:

The site may or may not run on Safari, FF, etc. depending on whether the latest Babel transpiled version has been run and uploaded. The development target is Chrome.

Current focus is on testing the user's knowledge of species at /learn/learn.html. Species lists, etc. will vary (as will pretty much everything else day to day)...

Older:

Simple flip card game for botanical identification

* main.js: handles maintaining state (and something of a controller)
* card.js handles rendering ui
* inat.js handles loading data
* eol.js handles loading data

To run the app in Terminal e.g. http-server (http-server can be found in node-modules)
* No cache option: http-server -c-1

Bacon library used to handle the stream of events (clicks) in main.js
Lodash library used for piping functions

Import used for Chrome (note the type module on the main file)

NB sudo npm install --save-dev babel-jest babel-core regenerator-runtime

Good practice for pushing updates to github (local --> central):

* git log --oneline
* git status
* git add .
* git commit -m "commmit comments"
* git checkout master
* git fetch origin
* git rebase -i origin/master
* git push origin master

* Undo commit: git commit --amend or git commit --amend -m "Fixes bug #42"

Tests using Jest: https://facebook.github.io/jest/docs/en/getting-started.html
NB Run npm init first to create a package.json file
Add touch .gitignore. If necessary:
* git rm -rf --cached .
* git add .

Typical vi session
* Type "vi file.txt" at command prompt
* Move cursor to where new text will be added
* Type "i" to change to insert mode
* Type new text
* Type ESC to go back to command mode
* type ":wq" and ENTER to write the file and quit


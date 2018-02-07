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


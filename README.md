Object literal alternative to the switch statement

Good practive for pushing updates to github (local --> central):

* git log --oneline
* git status
* git add .
* git commit -m "commmit comments"
* git checkout master
* git fetch origin
* git rebase -i origin/master
* git push origin master

Tests using Jest: https://facebook.github.io/jest/docs/en/getting-started.html
NB Run npm init first to create a package.json file
Add touch .gitignore. If necessary:
* git rm -rf --cached .
* git add .
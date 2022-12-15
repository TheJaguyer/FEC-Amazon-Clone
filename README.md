# FEC-Amazon-Clone

A clone of an amazon page for a controller

# How to merge your work to the dev branch

1. to make a new branch for your own work

- git fetch -p (this command makes your branch names align with those at the remote origin)
- git checkout dev
- git pull (this is to ensure you have the most up-to-date work to start with)
- git checkout -b <nameyourbranch>

2. when your branch is ready to be pushed

- git add \*
- git commit -m 'whatever you want to write'
- git push (should say your banch doesn't exist at origin)
- copy and past the new push command and run it

3. go to github and create a pull request from your new branch to dev

4. wait for someone to review and merge

5. update your dev branch again to see if it all works

- git checkout dev
- git pull

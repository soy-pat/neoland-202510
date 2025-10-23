![Git image](https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Git-logo.svg/1200px-Git-logo.svg.png)

# Git - The Stupid Content Tracker

Git commands in terminal.

## git init

Initializes a local folder as a repository.

```bash
$ git init
Initialized empty Git repository in C:/Users/patri/workspace/neoland-202510/.git/
```

## git remote add origin repo-address

Connects the local repository to its origin in Github.

```bash
$ git remote add origin https://github.com/soy-pat/neoland-202510
```

## git pull

Pulls all the changes from remote (origin) repository.

```
$ git pull
remote: Enumerating objects: 4, done.
remote: Counting objects: 100% (4/4), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0 (from 0)
Unpacking objects: 100% (4/4), 1.84 KiB | 118.00 KiB/s, done.
From https://github.com/soy-pat/neoland-202510
 * [new branch]      main       -> origin/main
There is no tracking information for the current branch.
Please specify which branch you want to merge with.
See git-pull(1) for details.

    git pull <remote> <branch>

If you wish to set tracking information for this branch you can do so with:

    git branch --set-upstream-to=origin/<branch> main
```

## git branch -a

Shows all the branches in the repository.

```bash
$ git branch -a
  remotes/origin/HEAD -> origin/main
  remotes/origin/main
```

## git switch branch (main)

Changes the branch to the given one.

```bash
$ git switch main
branch 'main' set up to track 'origin/main'.
Already on 'main'
```

## git branch

Shows the local branches.

```bash
$ git branch
* main
```

## git status

Shows the status of files in local repo.

```bash
$ git status
On branch main
Your branch is up to date with 'origin/main'.

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        staff/

nothing added to commit but untracked files present (use "git add" to track)
```

## git add

Adds content to staging.

```bash
$ git add staff
```

## git config setting

Configures settings in local git.

```sh
$ git config user.name "soy-pat"
$ git config user.email "pizquierdocortes@gmail.com"
```

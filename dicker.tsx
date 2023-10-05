➜  newone (main) dir                                                                                                                                         ✱
zsh: command not found: dir
➜  newone (main) ls                                                                                                                                          ✱
dicker.tsx
➜  newone (main) git staturs                                                                                                                                 ✱
git: 'staturs' is not a git command. See 'git --help'.

The most similar command is
        status
➜  newone (main) git status                                                                                                                                  ✱
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        dicker.tsx

nothing added to commit but untracked files present (use "git add" to track)
➜  newone (main) git add dicker.tsx                                                                                                                          ✱
➜  newone (main) git status                                                                                                                                  ✈
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
        new file:   dicker.tsx

➜  newone (main) git commit                                                                                                                                  ✈
Aborting commit due to empty commit message.
➜  newone (main) git commit -m "here my commit"                                                                                                              ✈
[main (root-commit) 73b88a9] here my commit
 1 file changed, 1 insertion(+)
 create mode 100644 dicker.tsx
➜  newone (main) git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Writing objects: 100% (3/3), 235 bytes | 235.00 KiB/s, done.
Total 3 (delta 0), reused 0 (delta 0), pack-reused 0
To https://github.com/vasicl/newone.git
 * [new branch]      main -> main
➜  newone (main) 





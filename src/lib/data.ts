import type { GitCommand } from "./types"

export const gitCommands: GitCommand[] = [
  {
    id: "1",
    name: "Undo last commit but keep changes",
    description:
      "This command undoes the last commit but keeps all the changes in your working directory, so you can make adjustments before committing again.",
    usage: "git reset --soft HEAD~1",
    tags: ["undo", "commit", "useful"],
  },
  {
    id: "2",
    name: "View commit history as a graph",
    description: "Displays the commit history as a text-based graphical representation, showing branches and merges.",
    usage: "git log --graph --oneline --all",
    example:
      "* a1b2c3d (HEAD -> main) Add new feature\n* e4f5g6h Fix bug in login\n|\\  \n| * i7j8k9l (feature) Add feature implementation\n|/  \n* m0n1o2p Initial commit",
    tags: ["visualization", "history", "useful"],
  },
  {
    id: "3",
    name: "Stash only unstaged changes",
    description: "Stashes only the changes that haven't been staged yet, keeping your staged changes intact.",
    usage: "git stash --keep-index",
    tags: ["stash", "workflow", "tricky"],
  },
  {
    id: "4",
    name: "Find which commit deleted a line",
    description: "Uses git blame with the -w option to find which commit deleted a specific line of code.",
    usage: 'git log -S "<deleted-text>" -- <file-path>',
    example: 'git log -S "function getUserData" -- src/utils.js',
    tags: ["debugging", "search", "useful"],
  },
  {
    id: "5",
    name: "Create an empty commit",
    description:
      "Creates a commit with no changes, which can be useful for triggering CI/CD pipelines or marking points in history.",
    usage: 'git commit --allow-empty -m "Empty commit message"',
    tags: ["ci/cd", "workflow", "trick"],
  },
  {
    id: "6",
    name: "Find common ancestor of two branches",
    description:
      "Finds the common ancestor commit between two branches, useful for understanding where branches diverged.",
    usage: "git merge-base <branch1> <branch2>",
    example: "git merge-base main feature-branch",
    tags: ["branch", "useful", "debugging"],
  },
  {
    id: "7",
    name: "Interactive rebase",
    description:
      "Allows you to modify commits in many ways such as editing, deleting, and squashing as you move them to the new base.",
    usage: "git rebase -i HEAD~<number-of-commits>",
    example: "git rebase -i HEAD~3",
    tags: ["rebase", "history", "useful"],
  },
  {
    id: "8",
    name: "Temporarily switch to another commit",
    description: "Temporarily switches to another commit without creating a branch, useful for quick inspection.",
    usage: "git checkout <commit-hash>",
    example: "git checkout a1b2c3d",
    tags: ["navigation", "inspection", "useful"],
  },
  {
    id: "9",
    name: "Find which commit introduced a bug",
    description: "Uses binary search to find which commit introduced a bug by marking commits as good or bad.",
    usage:
      "git bisect start\ngit bisect bad\ngit bisect good <commit-hash>\n# Git will checkout commits for you to test\n# Mark each as good or bad: git bisect good/bad\n# When done: git bisect reset",
    tags: ["debugging", "bisect", "useful"],
  },
  {
    id: "10",
    name: "Show changes between two commits",
    description: "Displays the differences between two commit references.",
    usage: "git diff <commit1>..<commit2>",
    example: "git diff HEAD~3..HEAD",
    tags: ["diff", "comparison", "useful"],
  },
  {
    id: "11",
    name: "Rename local and remote branch",
    description: "Renames both local and remote branches to a new name.",
    usage:
      "# Rename local branch\ngit branch -m <old-name> <new-name>\n\n# Delete old remote branch and push new one\ngit push origin :<old-name>\ngit push origin <new-name>",
    tags: ["branch", "rename", "useful"],
  },
  {
    id: "12",
    name: "Recover deleted branch",
    description: "Recovers a branch that was deleted, as long as the garbage collection hasn't run yet.",
    usage:
      "git reflog\n# Find the hash of the commit at the tip of deleted branch\ngit checkout -b <branch-name> <commit-hash>",
    tags: ["recovery", "branch", "useful"],
  },
  {
    id: "13",
    name: "Commit only part of a file",
    description: "Allows you to stage and commit only specific parts of a file, rather than the entire file.",
    usage: "git add -p <file-path>",
    tags: ["partial", "commit", "useful"],
  },
  {
    id: "14",
    name: "Find who changed a line",
    description: "Shows who last modified each line of a file and in which commit.",
    usage: "git blame <file-path>",
    example: "git blame src/components/Button.jsx",
    tags: ["blame", "history", "useful"],
  },
  {
    id: "15",
    name: "Clean untracked files and directories",
    description: "Removes all untracked files and directories, useful for cleaning up your working directory.",
    usage: "git clean -fd",
    tags: ["cleanup", "untracked", "useful"],
  },
]


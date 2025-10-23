![BASH image](https://rsg-ecuador.github.io/unix.bioinfo.rsgecuador/_images/bash.png)

# BASH

Commands in BASH terminal.

## pwd

Path to working directory.

```bash
$ pwd
/c/Users/patri
```

## ls

List files and folders (directories).

```bash
$ ls
neoland-202510/
```

## ls - l

List files and folders (directories) with details.

```bash
$ ls -l
total 0
drwxr-xr-x 1 patri 197609 0 Oct 22 21:37 neoland-202510/
```

## ls -a

Show visible and hidden files and folders in give path.

```bash
$ ls -a
./  ../  .git/  staff/
```

## mkdir folder-name

Creates directory/folder.

```bash
$ mkdir workspace
```

## touch file-name

Creates an empty file with the given name.

```bash
$ touch README.txt
```

## chmod rwx file-name/folder-name

Updates permissions in given file or folder.

```bash
$ chmod 700 README.txt
```

## nano file-name

Opens a given file in the Nano editor.

```bash
$ nano README.txt
```

##rm file-name

Removes a given file from system.

```bash
$ rm README.txt
```

##rmdir folder-name

Removes a given folder when _is empty_.

```bash
$ rmdir temp
```

## cd folder-name

Changes from current folder to the given folder path.

```bash
$ cd workspace
```

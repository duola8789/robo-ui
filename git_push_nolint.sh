#!/bin/sh

if [ $# -ne 1 ]; then
    echo "Usage: git_push <branch>"
    exit
fi

BRANCH=$1

git push icode $BRANCH:refs/for/$BRANCH

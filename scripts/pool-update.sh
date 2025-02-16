#!/usr/bin/env bash

# form the stub
DATE=`date +%Y-%m-%d`
TIMESTAMP=`date +%Y-%m-%dT%H:%M:%S%z`
TIMESTAMP="${TIMESTAMP:0:22}:${TIMESTAMP:22:25}"
UPDATEFILE=../content/pool/$DATE.md

# create the content file
printf "+++\ndate = \"$TIMESTAMP\"\n+++\n\n$1\n" > $UPDATEFILE

# add and commit
git add $UPDATEFILE
git commit -m "update pool status for $DATE"

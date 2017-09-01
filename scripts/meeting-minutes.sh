#!/usr/bin/env bash

# ensure arguments
if [ "$#" -ne 3 ]; then
    echo "Usage: meeting-minutes YEAR MONTH DAY"
    exit 1
fi

YEAR=$1
MONTH=$2
DAY=$3

# form the stub
UPDATEFILE=../content/documents/minutes/$YEAR-$MONTH-$DAY.md

# create the content file
printf "+++\ndate = \"${YEAR}-${MONTH}-${DAY}T18:00:00-08:00\"\ntype = \"minutes\"\n+++\n\n" > $UPDATEFILE

# add and commit
# git add $UPDATEFILE
# git commit -m "update pool status for $DATE"

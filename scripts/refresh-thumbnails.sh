#!/bin/bash
for i in $( ls static/pdf/*.pdf); do
    convert $i[0] -thumbnail 150 ${i%.pdf}-thumb.png
done
mv static/pdf/*.png static/img

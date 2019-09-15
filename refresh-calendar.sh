#!/usr/bin/env bash

mkdir -p data/calendar
curl "https://www.googleapis.com/calendar/v3/calendars/5rsmr2tlbsnis3q1ebjbfof4oc@group.calendar.google.com/events?key=$GCAL_API_KEY" -o data/calendar/kingsgate5_calendar.json


#!/bin/bash

# TMP DIRECTORY
MYTMP=/tmp/

# SAVE analytics.js HERE
INSTALL_IN=~/Sites/sonniesedge.co.uk/source/

# RESOURCE URLS
GOOGLE_GA_URL=http://www.google-analytics.com/analytics.js

# USER-AGENT
UA="Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.57 Safari/537.36"

# CD TO TMP DIRECTORY
cd $MYTMP

# DOWNLOAD THE FILE
curl --header "Pragma:" -f -s -A "${UA}" -m 1800 --retry 15 --retry-delay 15 --max-redirs 8 -O $GOOGLE_GA_URL

# GIVE FILE CORRECT PERMISSIONS
chmod 644 $MYTMP/analytics.js

# COPY FILE TO SITE DIRECTORY
cp -r $MYTMP/analytics.js $INSTALL_IN

# RETURN TO OLDPWD
cd $OLDPWD

exit 0;

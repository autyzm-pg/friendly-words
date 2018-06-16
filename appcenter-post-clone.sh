#!/usr/bin/env bash

echo "Starting post clone script..."

SOURCE=`dirname $0`

# Add ms appcenter api key
sed -i .bak -e "s/{APPCENTER_API_KEY}/$APPCENTER_API_KEY/g" $SOURCE/android/app/src/main/assets/appcenter-config.json
cat $SOURCE/android/app/src/main/assets/appcenter-config.json

echo "Post clone script finished."

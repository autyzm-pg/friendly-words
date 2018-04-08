#!/usr/bin/env bash

echo "Starting post clone script..."

SOURCE=`dirname $0`

# Add ms appcenter api key
if [[ ! -z "${API_KEY}" ]]; then
    echo "Injecting APPCENTER_API_KEY"
    echo "{ \"app_secret\": \"$API_KEY\" }" > $SOURCE/android/app/src/main/assets/appcenter-config.json
fi

# Set up development URL for expo
if [[ ! -z "${EXPO_DEV_URL}" ]]; then
    echo "Setting development host: $EXPO_DEV_URL"
    sed -i -e "s@://.*:@://$EXPO_DEV_URL:@g" $SOURCE/android/app/src/main/java/host/exp/exponent/generated/DetachBuildConstants.java
fi

echo "Post clone script finished."
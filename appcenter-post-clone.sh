#!/usr/bin/env bash

echo "Starting post clone script..."

echo "Accepting Android SDK"
./accept-licenses.sh

# fixing node version compatibility problem
set -ex
brew uninstall node@6
NODE_VERSION="8.9.4"
curl "https://nodejs.org/dist/v${NODE_VERSION}/node-v${NODE_VERSION}.pkg" > "$HOME/Downloads/node-installer.pkg"
sudo installer -store -pkg "$HOME/Downloads/node-installer.pkg" -target "/"

SOURCE=`dirname $0`

# Add ms appcenter api key
sed -i .bak -e "s/{APPCENTER_API_KEY}/$APPCENTER_API_KEY/g" $SOURCE/android/app/src/main/assets/appcenter-config.json
cat $SOURCE/android/app/src/main/assets/appcenter-config.json

echo "Post clone script finished."

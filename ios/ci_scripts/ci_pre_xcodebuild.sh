#!/bin/zsh
# Xcode Cloud nummert builds vanaf 1; bij Apple staan al builds t/m 8.
# Verschuif het buildnummer zodat elke cloud-build hoger uitkomt.
set -e

cd "$CI_PRIMARY_REPOSITORY_PATH/ios"
NEW_BUILD=$((8 + ${CI_BUILD_NUMBER:-1}))
/usr/libexec/PlistBuddy -c "Set :CFBundleVersion $NEW_BUILD" GolfregelsQuiz/Info.plist
echo "CFBundleVersion gezet op $NEW_BUILD"

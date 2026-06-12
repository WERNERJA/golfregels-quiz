#!/bin/zsh
# Xcode Cloud post-clone: installeer Node, JS-dependencies en CocoaPods-pods.
set -e

export HOMEBREW_NO_INSTALL_CLEANUP=TRUE
brew install node cocoapods

cd "$CI_PRIMARY_REPOSITORY_PATH"
npm ci

cd ios
export LANG=en_US.UTF-8
pod install

#!/usr/bin/env sh

if test -e "./serve.js";
then
    node \
    ./serve.js \
    $@
else
    exec $@
fi

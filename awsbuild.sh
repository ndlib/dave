#!/bin/bash
# first you must assume the role of the testlibadmin superAdmin role.
# see sean to get this setup.

ENV=pprd
BUCKET=davepprd.library.nd.edu

git pull
npm run deploy:prod

cd ./dist

aws s3 sync . s3://${BUCKET} --exclude '.*' --exclude '*.md' --delete --acl public-read

cd ..

npm run compile

echo ${BUCKET}.s3-website-us-east-1.amazonaws.com

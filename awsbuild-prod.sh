#!/bin/bash
# first you must assume the role of the testlibadmin superAdmin role.
# see sean to get this setup.

ENV=prod
BUCKET=dave.library.nd.edu

git pull
npm run deploy:prod

cd ./dist

aws s3 sync . s3://${BUCKET} --exclude '.*' --exclude '*.md' --delete --acl public-read --profile libnd-wse-admin

echo ${BUCKET}.s3-website-us-east-1.amazonaws.com

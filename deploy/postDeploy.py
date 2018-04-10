from hesburgh import scriptutil, heslog

def run(stage, outputs):
  bucket = None
  for k, stackInfo in outputs.iteritems():
    out = stackInfo.get("outputs", {})
    if "BucketName" in out:
      bucket = out.get("BucketName")
      break

  if not bucket:
    heslog.error("no bucket found to deploy to")
    return {}

  heslog.info("Building Source")
  scriptutil.executeCommand("yarn deploy:prod")

  heslog.info("Deploying code to bucket %s" % bucket)

  scriptutil.executeCommand("cd ../dist && aws s3 sync . s3://%s --delete --acl public-read" % bucket)

  return {}

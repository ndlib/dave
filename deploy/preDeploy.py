from hesburgh import scriptutil, heslog
import json
import os

from hesburgh import scriptutil, heslog
import json
import os

def getCert(domain):
  output = scriptutil.executeCommand("aws acm list-certificates --certificate-statuses ISSUED --includes extendedKeyUsage=TLS_WEB_SERVER_AUTHENTICATION --query 'CertificateSummaryList[?DomainName==`%s`]|[0]'" % domain)
  data = json.loads(output.get("output"))
  if data:
    return data.get("CertificateArn")
  return None


def generateEnv(stage):
  fqdn = "dave" if stage == "prod" else "dave-" + stage
  fqdn = "%s.library.nd.edu" % fqdn

  certArn = getCert(fqdn)
  if not certArn:
    certArn = getCert('*.library.nd.edu')

  return {
    "CERT_ARN": certArn,
    "FQDN": fqdn,
  }


def runTests():
  os.environ["CI"] = "Local"
  output = scriptutil.executeCommand("yarn test")
  return output.get("code") == 0


def run(stage):
  heslog.info("Running yarn")
  scriptutil.executeCommand("cd .. && yarn")

  heslog.info("Running tests")
  if not runTests():
    return { "error": "Testing Failed" }

  return { "env": generateEnv(stage) }

# Acceptance test example

## Installing
A simple NPM install is enough what it will do:
* Install dependencies
* Download and install selenium standalone

## Testing with selenium
```
npm run-script run-selenium
```

### The config hooks
The config file for selenium contain 2 hooks.
 The onPrepare runs the selenium server
 The onComplete shutsdown the selenium server

## Testing with browserstack
Add your credentials to the config file "etc/config.json"

```
npm run-script run-browserstack
```

### The config hooks
The config file for browserstack contain 2 hooks.
 The onPrepare sets up the local connection to make sure it uses the local DNS
 The onComplete closes this connection

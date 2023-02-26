# Cyprus Developer Community

[Join us on Discord](https://chat.cdc.cy) or participate in our
[discussions on GitHub](https://github.com/cyprus-developer-community/home/discussions).

## Contribute to cdc.cy

Work in progress. Stay tuned.

## Setup

1. At the top level of your repository, run the below bash command. It will
   autogenerate a .env file with some dummy values.

```bash
tee .env <<EOF
MOCKS_ENABLED=true
GH_APP_ID=1
GH_PRIVATE_KEY=$(openssl genrsa 2048 | awk -v ORS='\n' '1' | openssl base64 -A)
GH_APP_INSTALLATION_ID=1234
EOF
```

2. Run `pnpm dev:remix` and access the page in the browser. The page is
   available in `http://localhost:3000`

## End-To-End(E2E) Testing

```
# All test suites
pnpm exec playwright test

# Only the Home page test suite
pnpm exec playwright test ./e2e/home.spec.ts
pnpm exec playwright test -g 'Home'

# Only the test on line 8
pnpm exec playwright test ./e2e/home.spec.ts:8

# Only a single browser
pnpm exec playwright test --project=chromium

# Spin-up a dev server and show report
pnpm exec playwright show-report

# Debug mode
pnpm exec playwright test --debug
```

## Code of Conduct

Our goal is to have an awesome, inclusive and safe community meetup where people
meet, hang out together, chat, listen to talks, exchange ideas and make new
friends. Any harmful or discriminating behaviour will not be tolerated and
results in the offending person being expelled from the meetup.

For details on what kinds of behaviour are not tolerated and consequences for
violating these rules, we refer to the
[Berlin Code of Conduct](https://rubyberlin.github.io/code-of-conduct).

_Note: BerlinJS has been a pioneer in the JavaScript User Group scene in Europe
and set a great example. We want to learn from and follow the best, hence we
allowed ourselves to copy a few things from them._

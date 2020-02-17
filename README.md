# xrpl-validator-stats-twitterbot

A Twitter bot that captures the screenshot of an [XRPL
validator](https://xrpl.org/run-rippled-as-a-validator.html)'s stats on
https://stats.xrplapps.com using `wkhtmltoimage` and tweet it.

1. Clone/download this repo and install dependencies with `npm install`.
2. Rename `config-example.js` to `config.js` and fill out the necessary
   information ([see how](
   https://botwiki.org/resource/tutorial/how-to-create-a-twitter-app/)).
3. Install [wkhtmltopdf](https://wkhtmltopdf.org/). It's available in most Linux
   distros.

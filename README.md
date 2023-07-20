# Demo Code

This is the code as I've showed it during reCAP 2023. The recording of my session is [available on the reCAP event page over on broadcast.sap.com](https://broadcast.sap.com/replay/23707_reCAP2023), starting at 5:53:34.

The UI code is based on [this blog post](https://medium.com/@marius.obert/getting-started-with-fundamental-library-styles-in-2023-a4faa28575da).

# Prerequisites

* Create a [free Twilio account](https://www.twilio.com/try-twilio)
* Create a [Verify service](https://support.twilio.com/hc/en-us/articles/360033309133-Getting-Started-with-Twilio-Verify-V2) (with [SendGrid Integration](https://www.twilio.com/docs/verify/email) -- or send OTPs via SMS or WhatsApp for easier setup)
* Replace with placeholders in `default-env.json` with your Twilio account information


# Getting Started

```
npm install
npm run build
npm start
```

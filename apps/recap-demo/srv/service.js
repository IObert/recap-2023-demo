const cds = require('@sap/cds');
const twilio = require("twilio");

class CatalogService extends cds.ApplicationService {
    async init() {

        const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN)
        const service = client.verify.v2.services(process.env.VERIFY_SERVICE)
        this.after('CREATE', 'Feedback', async req => {

            await service.verifications.create({
                to: req.email,
                channel: 'email'
            })
        });

        this.on('verify', async req => {
            console.log(`received code ${req.data.code}`)

            const { email } = await SELECT.one(req.subject);


            const check = await service.verificationChecks.create({
                to: email,
                code: req.data.code
            })

            if(!check.valid){
                req.error("Invalid code")
            }

            await UPDATE(req.subject).with({ verified: check.valid })
        })

        return super.init()
    }
}

module.exports = { CatalogService }
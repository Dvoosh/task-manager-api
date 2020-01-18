const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dvir@example.com',
        subject: 'Thanks for join in!',
        text: `Welcome to the app, ${name}`
    })
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dvir@example.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail    
}
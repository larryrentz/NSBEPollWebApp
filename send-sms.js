const accountSid = process.env.TWILIO_SID;
const authToken  = process.env.TWILIO_AUTH;
const client     = require('twilio')(accountSid,authToken);

client.messages.create({
  to  : null,				// PUT PHONE NUMBER HERE (ENV VARIABLE)
  from: '+18508088826',			// TWILIO FREE NUMBER
  body: 'test',				// GET MESSAGE FROM API.AI
})
.then((message) => console.log(message.sid));

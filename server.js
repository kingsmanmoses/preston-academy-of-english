const sdk = require("node-appwrite");

const client = new sdk.Client()
  .setEndpoint("https://cloud.appwrite.io/v1") //! this is to set your API endpoint
  .setProject("6713be2a00268846ac26") //! To set our project ID
  .setKey(
    "standard_bcc317bad5f9dbd8b2ce79205dbe95d958bd6fb058f092107e52aa0929d60f4c3715cbc83901a712c37356d4a047e83ef436e5e9b3f38451ac22ebb4c7e590a799a481812af08c507609a51962395480d38882c5029a12f479058b102a65b71ca466113fb299e04efb0358fd9535656195328598952780c745a673a7ed55f9ee"
  ); //! to create our secret API key from our appWrite api key

const messaging = new sdk.Messaging(client);
const sendEmail = async () => {
 const message =   await messaging.createEmail(
    "", //* Messaging ID (this is for the email being sent)
    "", //* Messaging subject
    "" ,//* Messaging content
    [], //* users
  );
  console.log(message)
};

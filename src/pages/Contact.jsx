// TODO: Create a contact page that allows the user to input an name, email, and message
export default function Contact() {
    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <form className="contact-form">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" required></textarea>
                </div>
                <button type="submit">Send</button>
            </form>
        </div>
    );
    //TODO: When the user moves the cursor out of the field, they should get a notification that this field is required


//TODO: When the user enters an email, they should receieve a notification that the email is valid or invalid
}
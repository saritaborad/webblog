import { markdownify } from "/lib/utils/textConverter";

const Contact = () => {
 return (
  <section className="section">
   <div className="container max-w-[700px]">
    {markdownify("Contact", "h1", "h2 mb-8 text-center")}
    <form className="contact-form" method="POST">
     <div className="mb-6">
      <label htmlFor="name" className="mb-2 block">
       Name
      </label>
      <input className="form-input w-full" name="name" type="text" required />
     </div>
     <div className="mb-6">
      <label htmlFor="" className="mb-2 block">
       Email
      </label>
      <input type="email" className="form-input w-full" name="email" required />
     </div>
     <div className="mb-6">
      <label htmlFor="subject" className="mb-2 block">
       Subject
      </label>
      <input type="text" className="form-input w-full" name="subject" required />
     </div>
     <div className="mb-6">
      <label htmlFor="message" className="mb-2 block">
       Message
      </label>
      <textarea className="form-textarea w-full" rows="7"></textarea>
     </div>
     <button className="btn btn-outline-primary">Submit</button>
    </form>
   </div>
  </section>
 );
};

export default Contact;

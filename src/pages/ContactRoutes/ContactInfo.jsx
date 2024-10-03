import { FaWhatsapp } from "react-icons/fa";
function ContactInfo() {
  return (
    <>
      <section>
        <div className="ml-2 grid items-center justify-center md:grid-cols-2 md:gap-40">
          {/* LEFT SIDE */}
          <div>
            <h2 className="mt-4 text-2xl font-bold uppercase">live support</h2>
            <p className="mt-6">
              Message us on <span className="underline">Whatsapp</span> or
              through Live Chat using button below(ENGLISH ONLY).
            </p>
            <p className="py-6 font-bold">Or Message Us on WhatsApp.</p>
            <button className="btn w-96 md:w-72">
              <FaWhatsapp className="mr-2 text-2xl" />
              <span className="text-lg">WhatsApp</span>
              <span className="ml-5 w-20 rounded-xl border border-accent bg-accent p-2">
                New!
              </span>
            </button>
            <p className="py-6 font-bold underline">
              Let&apos;s chat! (Agent is unavailable)
            </p>
            <h2 className="text-2xl font-bold uppercase">Phone</h2>
            <p className="mt-6">
              <span className="font-bold">UK(</span>ENGLISH ONLY):
              +44-(0)20-3695-5072
            </p>
            <p className="mt-2">
              <span className="font-bold">USA(</span>IN ENGLISH & SPANISH ):
              +1-800-123-4567
            </p>
            <h2 className="py-6 text-2xl font-bold uppercase">EMAIL</h2>
            <p>
              <span className="underline">Email us</span> anytime and we will
              get back to you within 24-48 hours
            </p>
            <h3 className="py-6 text-2xl font-bold">stylzmc@gmail.com</h3>
          </div>
          {/* RIGHT SIDE */}
          <div>
            <h2 className="text-2xl font-bold uppercase">Main office</h2>
            <h3 className="py-8 font-redHatDisplay">StylzMc, Inc.</h3>
            <p>123 Fashion Ave, Suite 456, New York/</p>
            <p>NY 10001, USA</p>
            <h3 className="font-redHatDisplay uppercase">StylzMc limited</h3>
            <p>United States of America</p>
            <p>sales@stylzmc.com</p>
            <p>Organization number 987654321</p>
            <p>VAT Number: US123456789 </p>
            <h3 className="my-6 text-2xl font-bold uppercase">
              stylzmc limited
            </h3>
            <p>123 Fashion Ave, Suite 456, New York</p>
            <p>NY 10001, USA</p>
            <p>United States of America</p>
            <p>sales@stylzmc.com</p>
            <p>Organization number 987654321</p>
            <p>VAT Number: US123456789 </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactInfo;

function ReturnsPolicy() {
  return (
    <div className="px-6 py-8">
      <h1 className="mb-4 text-center text-3xl font-bold">Returns Policy</h1>
      <p className="mb-6">
        At our store, we want you to love every purchase. If something doesn’t
        work out, don’t worry—our hassle-free returns policy has you covered.
      </p>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Eligibility for Returns</h2>
        <p>
          Items can be returned within 30 days of delivery as long as they’re in
          their original condition. This means:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Unworn, unwashed, and free of any damage or stains.</li>
          <li>All tags and labels are intact.</li>
          <li>Original packaging is included (if applicable).</li>
        </ul>
        <p className="mt-2">
          Items marked as final sale or personalized products cannot be returned
          unless they arrive damaged or defective.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">How to Start a Return</h2>
        <p>
          To begin the process, visit our{" "}
          <a href="#returns-page" className="text-blue-500">
            Returns Page
          </a>{" "}
          and enter your order number and email. Once your return request is
          approved, you’ll receive a prepaid shipping label via email.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Shipping Your Return</h2>
        <p>
          Pack your items securely in a box or the original packaging. Attach
          the prepaid return label and drop it off at your nearest shipping
          location. Make sure to keep the tracking number for your records.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Refunds</h2>
        <p>
          Once we receive and inspect your return, we’ll process your refund
          within 5-7 business days. The refund will be credited back to your
          original payment method. If there are any issues, we’ll reach out to
          you directly.
        </p>
        <p className="mt-2">
          Please note: Shipping fees are non-refundable unless the return is due
          to an error on our part.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">Exchanges</h2>
        <p>
          Prefer an exchange? No problem! Follow the same steps as a return and
          specify the item you’d like in exchange. We’ll ship the replacement as
          soon as your return is processed.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          Damaged or Defective Items
        </h2>
        <p>
          If your order arrives damaged or defective, we’re here to help.
          Contact our support team within 7 days of delivery with photos of the
          issue. We’ll ensure you receive a replacement or a full refund.
        </p>
      </section>

      <p className="mt-6">
        Have questions about your return? Reach out to our friendly customer
        service team at{" "}
        <a href="mailto:support@yourstore.com" className="text-blue-500">
          support@stylzmc.com
        </a>{" "}
        or call us at{" "}
        <a href="tel:+1234567890" className="text-blue-500">
          +123-456-7890
        </a>
        . We’re here to make it right!
      </p>
    </div>
  );
}

export default ReturnsPolicy;

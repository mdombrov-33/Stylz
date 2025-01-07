function ShippingGuide() {
  return (
    <div className="px-6 py-8">
      <h1 className="mb-4 text-center text-3xl font-bold">Shipping Guide</h1>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">1. Shipping Options</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Standard Shipping:</strong> Estimated delivery within 5-7
            business days.
          </li>
          <li>
            <strong>Express Shipping:</strong> Arrives within 2-3 business days.
          </li>
          <li>
            <strong>Next-Day Delivery:</strong> Place your order before 12 PM
            for delivery the next business day.
          </li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">2. Shipping Costs</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Standard Shipping: <strong>Free</strong> for orders over $50.
          </li>
          <li>Express Shipping: Starting at $10.</li>
          <li>Next-Day Delivery: Starting at $20.</li>
        </ul>
        <p className="mt-2">
          <em>Note: Exact shipping costs are calculated at checkout.</em>
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          3. Order Processing Time
        </h2>
        <p>
          Orders are processed within 1-2 business days. During sales or
          holidays, processing times may take a little longer.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          4. International Shipping
        </h2>
        <p>
          We ship worldwide! Delivery times and costs vary by destination.
          Additional customs fees or import duties may apply, depending on your
          country’s regulations.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">5. Tracking Your Order</h2>
        <p>
          Once your order is shipped, you'll receive a confirmation email with a
          tracking number. Use it to follow your order’s journey in real time.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">6. Delivery Policy</h2>
        <p>
          Ensure your shipping address is correct to avoid delays. If you’re not
          home during delivery:
        </p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Standard and Express orders may be left at a secure location.</li>
          <li>Next-Day Delivery requires a signature.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          7. Lost or Delayed Shipments
        </h2>
        <p>If your order hasn’t arrived within the expected timeframe:</p>
        <ol className="list-decimal space-y-2 pl-6">
          <li>Check the tracking details.</li>
          <li>
            Contact our support team at{" "}
            <a href="mailto:support@stylzmc.com" className="text-blue-500">
              support@stylzmc.com
            </a>{" "}
            or call{" "}
            <a href="tel:+1234567890" className="text-blue-500">
              +123-456-7890
            </a>{" "}
            for assistance.
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          8. Returns and Exchanges
        </h2>
        <p>
          Not satisfied with your order? Visit our{" "}
          <a href="#returns" className="text-blue-500">
            Returns & Exchanges
          </a>{" "}
          page for hassle-free returns within 30 days of delivery.
        </p>
      </section>
    </div>
  );
}

export default ShippingGuide;

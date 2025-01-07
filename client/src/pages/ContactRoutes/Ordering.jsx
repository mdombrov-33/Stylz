function Ordering() {
  return (
    <div className="px-6 py-8">
      <h1 className="mb-6 text-center text-3xl font-bold">
        How to Place an Order
      </h1>
      <p className="mb-6 text-lg">
        Shopping for your next favorite outfit has never been easier! Follow
        these simple steps to get your perfect look delivered right to your
        door:
      </p>
      <section className="space-y-6">
        <div>
          <h2 className="mb-2 text-2xl font-semibold">Browse Our Collection</h2>
          <p className="text-lg">
            Explore our wide range of styles and categories. Use filters to find
            exactly what you're looking for—whether it's size, color, or
            seasonal trends.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-2xl font-semibold">Select Your Items</h2>
          <p className="mb-2 text-lg">Once you’ve found something you love:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Choose your preferred size.</li>
            <li>Pick a color (if applicable).</li>
            <li>Add the item to your cart.</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-2xl font-semibold">Review Your Cart</h2>
          <p className="text-lg">
            Click on the cart icon to review your selected items. Here, you can:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Update quantities.</li>
            <li>Remove items you no longer want.</li>
            <li>Ensure everything is just right before checkout.</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-2xl font-semibold">Proceed to Checkout</h2>
          <p className="mb-2 text-lg">Enter your details:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Shipping Information:</strong> Add your address and choose
              a delivery option.
            </li>
            <li>
              <strong>Payment Information:</strong> Pay securely with your
              preferred method (credit card, PayPal, or other options).
            </li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-2xl font-semibold">Confirm Your Order</h2>
          <p className="text-lg">
            Double-check your details and click <strong>Place Order</strong> to
            complete your purchase. You’ll receive a confirmation email with
            your order summary and tracking details.
          </p>
        </div>
        <div>
          <h2 className="mb-2 text-2xl font-semibold">Track Your Delivery</h2>
          <p className="text-lg">
            Stay updated with real-time tracking. Your items will arrive within
            the estimated delivery time.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Ordering;

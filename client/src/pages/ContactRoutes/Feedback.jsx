function Feedback() {
  return (
    <div className="px-6 py-8">
      <h1 className="mb-4 text-center text-3xl font-bold">
        We Value Your Feedback
      </h1>
      <p className="mb-6 text-lg">
        At Stylz, we're always striving to improve our services and products.
        Your feedback helps us understand what we’re doing well and where we can
        do better. We appreciate you taking the time to share your thoughts with
        us.
      </p>

      <h2 className="mb-4 text-2xl font-semibold">How Was Your Experience?</h2>
      <p className="mb-6">
        We’d love to hear about your shopping experience with us! Whether it’s
        about our website, the quality of our products, or the customer service
        you received, your input is invaluable. Please fill out the form below
        to let us know how we can make your next visit even better.
      </p>

      <div className="mb-6">
        <h3 className="mb-2 text-xl font-semibold">What Did You Like?</h3>
        <p className="mb-4">
          Did you love the variety of styles, the ease of browsing, or the
          quality of our products? Let us know what stood out to you during your
          shopping experience.
        </p>

        <h3 className="mb-2 text-xl font-semibold">What Can We Improve?</h3>
        <p className="mb-4">
          We believe there’s always room for improvement. If you encountered any
          issues or felt that something could have been better, we want to hear
          about it. Whether it’s our product range, the website navigation, or
          customer support, we’re all ears.
        </p>

        <h3 className="mb-2 text-xl font-semibold">
          Suggestions for New Features or Products
        </h3>
        <p className="mb-4">
          Do you have any ideas for new products we should add to our
          collection? Or any features you’d like to see on our website? We love
          hearing your creative suggestions to help us stay ahead of the trends.
        </p>
      </div>

      <form className="space-y-6">
        <label htmlFor="feedbackType" className="block text-lg font-semibold">
          Type of Feedback
        </label>
        <select
          id="feedbackType"
          name="feedbackType"
          className="w-full rounded-md border border-gray-300 p-2"
        >
          <option value="product">Product</option>
          <option value="website">Website Experience</option>
          <option value="customer-service">Customer Service</option>
          <option value="other">Other</option>
        </select>

        <label
          htmlFor="feedbackMessage"
          className="block text-lg font-semibold"
        >
          Your Feedback
        </label>
        <textarea
          id="feedbackMessage"
          name="feedbackMessage"
          rows="4"
          className="w-full rounded-md border border-gray-300 p-2"
          placeholder="Please share your thoughts here..."
        />

        <button
          type="submit"
          className="w-full rounded-md bg-accent p-3 text-white hover:bg-gray-400"
        >
          Submit Feedback
        </button>
      </form>

      <p className="mt-8 text-center text-lg">
        Thank you for helping us improve! We appreciate your support and look
        forward to continuing to serve you with great products and service.
      </p>
    </div>
  );
}

export default Feedback;

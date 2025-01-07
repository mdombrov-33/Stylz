function SizeGuide() {
  return (
    <div className="px-6 py-8">
      <h1 className="mb-4 text-center text-3xl font-bold">Size Guide</h1>
      <p className="mb-6">
        Finding the perfect fit is essential for looking and feeling your best!
        Follow this guide to ensure you select the right size for your next
        favorite outfit.
      </p>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">1. Check Our Size Chart</h2>
        <p>
          Every brand and style can fit differently, so be sure to refer to our
          detailed size chart for each product. You’ll find the chart on the
          product page, just below the size selection menu.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">
          2. Take Accurate Measurements
        </h2>
        <p>Use a flexible tape measure to take the following measurements:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Chest/Bust:</strong> Measure around the fullest part of your
            chest or bust, keeping the tape level.
          </li>
          <li>
            <strong>Waist:</strong> Measure around the narrowest part of your
            waist, just above the belly button.
          </li>
          <li>
            <strong>Hips:</strong> Measure around the fullest part of your hips.
          </li>
          <li>
            <strong>Inseam (for pants):</strong> Measure from the top of your
            inner thigh to the bottom of your ankle.
          </li>
        </ul>
        <p className="mt-2">
          Compare your measurements to our size chart to determine the best size
          for you.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">3. Consider the Fit</h2>
        <p>Decide how you want your clothing to fit:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            <strong>Snug Fit:</strong> Choose your exact size for a sleek,
            tailored look.
          </li>
          <li>
            <strong>Relaxed Fit:</strong> Go one size up for a more comfortable
            and laid-back style.
          </li>
        </ul>
        <p>
          If a product has a specific fit (e.g., slim fit, oversized), this will
          be noted in the product description.
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">4. Still Unsure?</h2>
        <p>
          If you’re between sizes or unsure, we recommend choosing the larger
          size for comfort. You can also contact our customer service team for
          personalized advice.
        </p>
        <p className="mt-2">
          Reach out to us at{" "}
          <a href="mailto:support@yourstore.com" className="text-blue-500">
            support@stylzmc.com
          </a>{" "}
          or call us at{" "}
          <a href="tel:+1234567890" className="text-blue-500">
            +123-456-7890
          </a>
          .
        </p>
      </section>

      <section className="mb-6">
        <h2 className="mb-2 text-2xl font-semibold">5. Try at Home</h2>
        <p>
          With our hassle-free returns policy, you can shop confidently! If your
          item doesn’t fit perfectly, you can easily exchange it for the right
          size.
        </p>
      </section>

      <p className="mt-6">
        Choosing the right size ensures you’ll love your look and feel
        comfortable all day. Happy shopping!
      </p>
    </div>
  );
}

export default SizeGuide;

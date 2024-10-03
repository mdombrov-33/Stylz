function MainFooter() {
  return (
    <footer className="footer grid grid-cols-3 bg-info-content p-10 text-neutral-content sm:grid-cols-6 md:grid-cols-5">
      <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link-hover link">Branding</a>
        <a className="link-hover link">Design</a>
        <a className="link-hover link">Marketing</a>
        <a className="link-hover link">Advertisement</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link-hover link">Contact</a>
        <a className="link-hover link">Jobs</a>
        <a className="link-hover link">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link-hover link">Terms of use</a>
        <a className="link-hover link">Privacy policy</a>
        <a className="link-hover link">Cookie policy</a>
      </nav>
      <nav>
        <h6 className="footer-title">Social</h6>
        <a className="link-hover link">Twitter</a>
        <a className="link-hover link">Instagram</a>
        <a className="link-hover link">Facebook</a>
      </nav>
      <nav>
        <h6 className="footer-title">Explore</h6>
        <a className="link-hover link">Features</a>
        <a className="link-hover link">Enterprise</a>
        <a className="link-hover link">Security</a>
        <a className="link-hover link">Pricing</a>
      </nav>
      <nav>
        <h6 className="footer-title">Apps</h6>
        <a className="link-hover link">Mac</a>
        <a className="link-hover link">Windows</a>
        <a className="link-hover link">iPhone</a>
        <a className="link-hover link">Android</a>
      </nav>
    </footer>
  );
}

export default MainFooter;

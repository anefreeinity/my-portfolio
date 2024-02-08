export default function Footer() {
  return (
    <div className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright 2022. All right reserved, ATOM.
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <a href="/">
            <i className="fa fa-facebook-official fa-lg text-white hover:text-yellow"></i>
          </a>
          <a href="/" className="pl-4">
            <i className="fa fa-twitter fa-lg text-white hover:text-yellow"></i>
          </a>
          <a href="/" className="pl-4">
            <i className="fa fa-github fa-lg text-white hover:text-yellow"></i>
          </a>
          <a href="/" className="pl-4">
            <i className="fa fa-linkedin fa-lg text-white hover:text-yellow"></i>
          </a>
          <a href="/" className="pl-4">
            <i className="fa fa-instagram fa-lg text-white hover:text-yellow"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

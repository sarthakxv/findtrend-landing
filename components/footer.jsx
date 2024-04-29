const Footer = () => {
  return (
    <div className="w-full h-[80px] flex flex-col sm:flex-row justify-between items-center text-black">
      <div className="sm:ml-12 my-3">
        <img src="/logofooter.svg" alt="" />
      </div>
      <div className="flex flex-col sm:flex-row text-sm justify-between items-center text-black font-normal w-2/5 sm:mr-12">
        <a href="" className="my-2">
          About
        </a>
        <a href="" className="my-2">
          Privacy Policy
        </a>
        <a href="" className="my-2">
          Terms and Conditions
        </a>
        <a href="" className="my-2">
          Contact Us
        </a>
        <a href="" className="my-2">
          Careers
        </a>
      </div>
    </div>
  );
};

export default Footer;

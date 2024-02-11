import Social from "../../utils/Social";

export default function Footer() {
  return (
    <div className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          @ANEFreeInIty
        </p>
        <div className="flex items-center justify-center pt-5 sm:justify-start sm:pt-0">
          <Social color_class={"text-white"} />
        </div>
      </div>
    </div>
  );
}

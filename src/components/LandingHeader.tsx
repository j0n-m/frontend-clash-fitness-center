type LandingHeaderProps = {
  text: string;
};

function LandingHeader({ text }: LandingHeaderProps) {
  return (
    <div className="landing-header about-us-bg h-[35svh] flex justify-center items-end">
      <h1 className="text-white-primary font-bold text-2xl md:text-3xl p-4">
        {text}
      </h1>
    </div>
  );
}

export default LandingHeader;

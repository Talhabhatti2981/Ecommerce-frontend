const SectionHeader = ({ title, subtitle, className = "" }) => {
  return (
    <div className={className}>
      <div className="flex items-center">
        <div className="w-6 h-11 bg-primary rounded-md shadow-modern" />
        <h1 className="text-primary ml-5 font-bold text-lg">{title}</h1>
      </div>
      {subtitle && (
        <div className="mt-6">
          <h1 className="font-semibold text-2xl sm:text-3xl lg:text-4xl">
            {subtitle}
          </h1>
        </div>
      )}
    </div>
  );
};

export default SectionHeader;


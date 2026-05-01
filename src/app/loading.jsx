const LoadingPage = () => {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full border-4 border-zinc-800"></div>

          <div className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"></div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Loading...</h2>

          <p className="text-xl text-zinc-400">Please wait a moment</p>
        </div>
      </div>
    </section>
  );
};

export default LoadingPage;

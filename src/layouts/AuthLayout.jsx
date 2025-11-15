const AuthLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 via-white to-orange-50 py-8 px-4">
      <div className="w-full max-w-md bg-white shadow-2xl rounded-2xl overflow-hidden border border-gray-100">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 p-6 text-white">
          <h2 className="text-2xl font-bold">Martiva</h2>
          <p className="text-sm opacity-90">Your trusted ecommerce destination</p>
        </div>
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;

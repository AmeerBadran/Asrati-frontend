const AuthInput= ({ children }) => {
  return (
    <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-md w-full focus-within:ring-2 focus-within:ring-secondary-200 focus-within:border-transparent transition bg-white/10 text-secondary-300">
      {children}
    </div>
  );
};

export default AuthInput;
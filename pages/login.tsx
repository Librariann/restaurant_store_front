function Login() {
  return (
    <div className="grid items-center justify-center">
      <h1 className="mt-60 font-bold md:text-4xl">LOGIN</h1>
      <input
        type="text"
        placeholder="ID"
        className="border border-sky-900 mt-60"
      />
      <input
        type="password"
        placeholder="PassWord"
        autoComplete="new-password"
        className="mt-5 border border-sky-900"
      />
    </div>
  );
}

export default Login;

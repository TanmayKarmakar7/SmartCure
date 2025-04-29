import React, { useState } from "react";

const Login = () => {
  const [state, setState] = useState("Sign up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHanler = async (e) => {
    e.preventDefault();
  };

  return (
    <form
      action=""
      onSubmit={onSubmitHanler}
      className="min-h-[80vh] flex items-center"
    >
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-gray-300 rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign up" ? "Create Account" : "Log In"}
        </p>
        <p>
          Please {state === "Sign up" ? "Sign Up" : "Log In"} to Book
          Appointment
        </p>
        {state === "Sign up" && (
          <div className="w-full">
            <p>Full Name</p>
            <input
              className="border border-zinc-300 rounded w-full p-2 mt-1"
              type="text"
              name=""
              id=""
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
        )}

        <div className="w-full">
          <p>Email</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            name=""
            id=""
            onChange={(e) => setName(e.target.value)}
            value={email}
          />
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            name=""
            id=""
            onChange={(e) => setName(e.target.value)}
            value={password}
          />
        </div>
        <button className="bg-[#58C87E] text-white w-full py-2 rounded-md text-base mt-2 cursor-pointer">
          {state === "Sign up" ? "Create Account" : "Log In"}
        </button>
        {state === "Sign up" ? (
          <p className="mt-1">
            Already have an account?
            <span
              onClick={() => setState("Login")}
              className="text-[#58C87E] cursor-pointer underline"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="mt-1">
            Create a new Account?
            <span
              onClick={() => setState("Sign up")}
              className="text-[#58C87E] cursor-pointer underline"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;

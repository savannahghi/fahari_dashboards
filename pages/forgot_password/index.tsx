//Next image component
import Image from "next/image";

//forgot password image
import forgot from "../../public/assets/images/forgot_password.png";

//icons
import { ChevronLeftIcon } from "@heroicons/react/solid";

const ForgotPassword = () => {
  return (
    <section className="flex flex-row w-screen">
      <section className=" bg-blue-600 h-screen flex flex-col justify-center items-center w-screen">
        <section className="relative left-12">
          <Image
            src={forgot}
            width="550"
            alt="forgot password"
            className="object-contain"
          />
        </section>
        <h1 className="font-poppins text-xl text-white font-semibold relative right-14">
          Reset Your Password
        </h1>
      </section>
      <section className="bg-white h-screen w-screen">
        <section className=" flex flex-row justify-between p-5 items-center cursor-pointer">
          <ChevronLeftIcon
            width={30}
            className="shadow-xl rounded-md hover:opacity-50 active:translate-y-3"
          />
          <p>
            Not a member? <span className="text-blue-600">Sign up now</span>
          </p>
        </section>

        <form className=" flex flex-col justify-center items-center h-[600px] space-y-6">
          <h2 className="text-2xl font-bold relative right-28 ml-5">
            Forgot Password?
          </h2>
          <p className="font-poppins relative right-[44px]">
            Enter email address used to when you joined{" "}
          </p>
          <input
            type="email"
            className=" outline-none border-2 border-solid border-blue-500 w-[400px] p-2 rounded-md"
            placeholder="Enter your email address"
            required
          />
          <button className="bg-blue-600 font-poppins font-bold text-white w-[300px] p-2 rounded relative right-11 hover:opacity-70 active:translate-y-2 ">
            Reset Button
          </button>
        </form>
      </section>
    </section>
  );
};

export default ForgotPassword;

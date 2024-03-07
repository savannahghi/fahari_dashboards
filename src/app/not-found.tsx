import Image from "next/image"
import notFoundAnimation from "@animations/animation_500_l4mahn50.gif"
import Link from "next/link"

const PageNotFound = () => {
  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <Image
        src={notFoundAnimation}
        width={500}
        height={500}
        alt="page_not_found_image"
      />
      <section className="relative bottom-20 flex flex-col justify-center items-center space-y-4">
        <h1 className=" font-bold font-poppins text-3xl">Page not Found</h1>
        <p>We could not find the page you are looking for</p>
        <Link
          href="/"
          className="font-poppins bg-blue-600 text-white p-3 rounded-md font-semibold cursor-pointer hover:opacity-75 active:translate-y-2 "
        >
          Go to Homepage
        </Link>
      </section>
    </section>
  )
}

export default PageNotFound

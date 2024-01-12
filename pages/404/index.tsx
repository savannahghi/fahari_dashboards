import Image from "next/image"
import { useRouter } from "next/navigation"

const PageNotFound = () => {
  const router = useRouter()

  return (
    <section className="flex flex-col justify-center items-center h-screen">
      <Image
        src="/../public/assets/animations/animation_500_l4mahn50.gif"
        width={500}
        height={500}
        alt="page_not_found_image"
      />
      <section className="relative bottom-20 flex flex-col justify-center items-center space-y-4">
        <h1 className=" font-bold font-poppins text-3xl">Page not Found</h1>
        <p>We could not find the page you are looking for</p>
        <button
          onClick={() => router.push("login")}
          className="font-poppins bg-blue-600 text-white p-3 rounded-md font-semibold cursor-pointer hover:opacity-75 active:translate-y-2 "
        >
          Go to Homepage
        </button>
      </section>
    </section>
  )
}

export default PageNotFound

export default function Footer() {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="bg-white">
      <div className="mx-auto overflow-hidden px-6 py-4 lg:px-8">
        <p className="mt-4 text-center text-xs leading-5 text-gray-500">
          &copy;
          {` ${currentYear} Savannah Informatics Limited, All rights reserved.`}
        </p>
      </div>
    </footer>
  )
}

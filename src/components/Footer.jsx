export default function Footer() {
  return (
    <footer className="h-20 grid grid-cols-12 place-items-center mt-8 bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800">
        <div className="col-span-4">
            Footer start
        </div>
        <div className="col-span-4">
            Pagina creada por Pablo Espinoza &copy; Copyright { new Date().getFullYear() }
        </div>
        <div className="col-span-4">
            Footer end
        </div>
    </footer>
  )
}

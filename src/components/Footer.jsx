export default function Footer() {
  return (
    <footer className="h-24 grid grid-cols-12 place-items-center bg-black mt-8">
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

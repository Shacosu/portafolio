export default function IntroLeft() {
  return (
    <div className="flex flex-col">
    <h2 className="text-3xl">Bienvenido a mi portafolio</h2>
    <p className="text-green-100">
        Mi nombre es Pablo Espinoza, Ingeniero en ejecución informática y <br /> soy
        desarrollador de software.
    </p>
    <div className="flex gap-4 mt-4">
        <a
            href="/textFile.txt"
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
            download={true}
        >
            <svg
                className="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
            >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
            </svg>
            <span>Descargar CV</span>
        </a>
        <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
            Conocer Mas
        </button>
    </div>
</div>
  )
}

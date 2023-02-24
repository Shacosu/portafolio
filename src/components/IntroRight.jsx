const languageList = [
    {
        name: 'React',
        alt: 'React-Logo',
        url: 'https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB'
    },
    {
        name: 'JS',
        alt: 'React-Logo',
        url: 'https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black'
    },
    {
        name: 'HTML',
        alt: 'HTML-Logo',
        url: 'https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white'
    },
    {
        name: 'CSS',
        alt: 'React-Logo',
        url: 'https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white'
    },
    {
        name: 'CSS',
        alt: 'React-Logo',
        url: 'https://camo.githubusercontent.com/e9b080a6541e5355827ea91b6a0302cbbc54af4705b0c6b0f1561a0957ced2fb/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f5461696c77696e645f4353532d3338423241433f7374796c653d666f722d7468652d6261646765266c6f676f3d7461696c77696e642d637373266c6f676f436f6c6f723d7768697465'
    },
    {
        name: 'CSS',
        alt: 'React-Logo',
        url: 'https://camo.githubusercontent.com/7f73136d92799b19be179d1ed87b461120c35ed917c7d5ab59a7606209da7bd3/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f457870726573732e6a732d3030303030303f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d7768697465'
    },
]

export default function IntroRight() {
	return (
        <section className="flex flex-col">
        <h1 className="text-3xl mb-8 text-center">Tecnologías que manejo</h1>
        <div className="grid grid-cols-12 gap-3 place-items-center">
            {languageList.map(({ name, alt, url }, indice) => (
            <div className="col-span-4 text-center" key={indice}>
            <img
                src={url}
                alt={alt}
                className="h-8"
            />
            {/* <span className="font-lighter tracking-wide text-sm">{name}</span> */}
        </div>
            ))}
		</div>  
        </section>

	);
}

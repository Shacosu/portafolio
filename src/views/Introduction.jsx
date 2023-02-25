import IntroLeft from "../components/IntroLeft";
import IntroRight from "../components/IntroRight";

export default function Introduction() {
	return (
		<div className="flex flex-col  justify-around items-center min-h-[20rem] w-12/12 md:flex-row  ">
			<IntroLeft />
			<IntroRight />
		</div>
	);
}

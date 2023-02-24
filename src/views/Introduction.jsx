import IntroLeft from "../components/IntroLeft";
import IntroRight from "../components/IntroRight";

export default function Introduction() {
	return (
		<div className="flex items-center justify-evenly h-[24rem] w-12/12">
      <IntroLeft />
      <IntroRight />
		</div>
	);
}

import { useEffect } from "react"; 
import Vara from "vara";

function VaraText( text ) {
	console.log(text);
	
	useEffect(() => {
		new Vara(
			"#vara-container",
			"https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Pacifico/PacificoSLO.json",
			[
				{
					text: text.text,
					fontSize: 100,
					strokeWidth: 2,
					y: 20,
					fromCurrentPosition: { y: false },
					duration: 2000,
					textAlign:"center",
					color: "white"
				},
				{
					text: "How may I help?",
					id: "no_erase",
					fontSize: 100,
					strokeWidth: 2,
					y: 20,
					fromCurrentPosition: { y: false },
					duration: 2000,
					delay: 2000,
					textAlign:"center",
					color: "white"
				},
			],
		).animationEnd(function(i, o) {
			console.log(i);
			if (i != "no_erase") {
				o.container.style.transition = "opacity 1s 1s";
				o.container.style.opacity = 0;
			}
		})
	}, []);

	return <div id="vara-container" className="z-[20]"></div>;
}

export default VaraText;
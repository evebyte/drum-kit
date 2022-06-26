const Display = () => {
	return (
		<div id="display" className="text-center">
			<h1
				id="title"
				className="font-bold 
                    text-5xl sm:text-8xl lg:text-9xl
                "
			>
				Drum Kit
			</h1>
			<h2
				id="display-text"
				className="font-bold
                text-sm  sm:text-lg md:text-xl lg:2xl
                p-2 sm:p-3
                inline-block rounded-lg 
                bg-[rgba(255,255,255,0.25)] dark:bg-[rgba(0,0,0,0.5)]
                "
			>
				Press a key to start
			</h2>
		</div>
	);
};

export default Display;

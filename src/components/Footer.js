const Footer = () => {
	return (
		<footer className="w-full fixed bottom-0 text-center p-2">
			<p>
				made by <span> </span>
				<a
					href="https://github.com/evebyte"
					target="_blank"
					className="font-bold underline
					text-blue-900 dark:text-blue-300  
					hover:text-pink-600 dark:hover:text-pink-700"
					rel="noopener noreferrer"
				>
					eve
				</a>
			</p>
		</footer>
	);
};

export default Footer;

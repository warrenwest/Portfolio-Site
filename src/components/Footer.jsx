export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-4">
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://github.com/warrenwest" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/warren0west/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="https://stackoverflow.com/users/30316253/warren" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                        <i className="fab fa-stack-overflow"></i>
                    </a>
                </div>
        </footer>
    );
}
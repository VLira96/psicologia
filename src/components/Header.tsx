import Link from "next/link";

const Header = () => {
    return (
        <header className="bg-green-600 w-full py-4 shadow-md pr-5">
            <div className="max-w-6xl mx-auto px-4 flex items-center justify-center gap-40 text-white">
                <Link href={'/'}>
                    <h1 className="text-2xl font-bold hover:text-blue-300 transition">
                        Segurança Digital e <br /> Direitos Humanos
                    </h1>
                </Link>

                <nav>
                    <ul className="flex space-x-6 text-lg">
                        <li>
                            <Link
                                href="/pages/seguranca-digital"
                                className="hover:text-blue-300 transition"
                            >
                                Segurança Digital
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pages/golpes-digitais"
                                className="hover:text-blue-300 transition"
                            >
                                Golpes Digitais
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pages/seguranca-e-direitos"
                                className="hover:text-blue-300 transition"
                            >
                                Direitos Humanos
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pages/fica-a-dica"
                                className="hover:text-blue-300 transition"
                            >
                                Fica a Dica
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
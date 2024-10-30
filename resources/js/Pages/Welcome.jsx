import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="bgAnimation">
                <div className="relative flex min-h-screen flex-col items-center justify-center">
                    <div>
                        <header>
                            <div>
                                <div className='my-10'>
                                    <h1 className='py-3 text-3xl font-bold font-sans text-[#69d7b9]'>Bienvenido a</h1>
                                    <div className="w-85 85">
                                        <img src="/images/Logo.png"/>
                                    </div>
                                </div>
                            </div>
                            <nav className="mx-3 flex flex-1 justify-center">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 mx-5  text-[#e2e2e2] hover:text-[#e2e2e2] bg-[#1ebe91] hover:bg-[#1ebe91] transition-colors duration-300 ease-in-out ring-1 ring-[#005546]"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 mx-5  text-[#e2e2e2] hover:text-[#005546] bg-[#005546] hover:bg-[#e2e2e2] transition-colors duration-300 ease-in-out ring-1 ring-[#e2e2e2]"
                                        >
                                            Register
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <footer className="py-16 text-center text-sm dark:text-[#c8d2d7]">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </footer>
                    </div>
                </div>
            </div>
        </>
    );
}

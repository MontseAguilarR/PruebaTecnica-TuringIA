import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children, user }) {
    console.log(user);
    const isAdmin = user?.hasAdminRole;
    console.log(isAdmin); // Verifica si el usuario tiene el rol de admin
    const isUser = user?.hasUserRole; // Verifica si el usuario tiene el rol de usuario
    console.log(isUser);

    const [showingNavigationDropdown, setShowingNavigationDropdown] = useState(false);

    return (
        <div className="min-h-screen dark:bg-[#c8d2d7]">
            <div className='py-3 bg-[#0f2d3c] flex justify-between'>
                <div className='flex space-x-2 mx-10'>
                    <div className='bg-[#1ebe91] w-10 h-3 rounded-lg'></div>
                    <div className='bg-[#1ebe91] w-10 h-3 rounded-lg'></div>
                </div>
                <div className='flex space-x-2 mx-10'>
                    <div className='bg-[#1ebe91] w-4 h-4 rounded-full'></div>
                    <div className='bg-[#1ebe91] w-4 h-4 rounded-full'></div>
                </div>
            </div>
            <hr className='bg-[#c8d2d7]' />
            <nav className="border-b py-3 dark:bg-[#0f2d3c]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center">
                                <Link href="/">
                                    <ApplicationLogo className="block h-9 w-auto fill-current" />
                                </Link>
                            </div>

                            {/* Navegación condicional basada en el rol */}
                            <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex justify-end">
                                {isUser && (
                                    <>
                                        <NavLink
                                            href={route('dashboard')}
                                            active={route().current('dashboard')}
                                        >
                                            Inicio
                                        </NavLink>
                                        <NavLink
                                            href={route('myReviews')}
                                            active={route().current('myReviews')}
                                        >
                                            Mis reseñas
                                        </NavLink>
                                        <NavLink
                                            href={route('myPlaylists')}
                                            active={route().current('myPlaylists')}
                                        >
                                            Mis playlists
                                        </NavLink>
                                    </>
                                )}
                                {isAdmin && (
                                    <>
                                        <NavLink
                                            href={route('dashboard')}
                                            active={route().current('dashboard')}
                                        >
                                            Panel de Admin
                                        </NavLink>
                                        <NavLink >Gestionar usuarios</NavLink>
                                        <NavLink >Gestionar contenido</NavLink>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center">
                            <div className="relative ms-3">
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                className="inline-flex items-center rounded-md border border-transparent p-2 bg-[#1ebe91] text-[#c8d2d7]"
                                            >
                                                {user.name}
                                                <svg
                                                    className="-me-0.5 ms-2 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link href={route('profile.edit')}>Perfil</Dropdown.Link>
                                        <Dropdown.Link href={route('logout')} method="post" as="button">Cerrar sesión</Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() => setShowingNavigationDropdown(previousState => !previousState)}
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none dark:text-gray-500 dark:hover:bg-gray-900 dark:hover:text-gray-400 dark:focus:bg-gray-900 dark:focus:text-gray-400"
                            >
                                <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path className={!showingNavigationDropdown ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                    <path className={showingNavigationDropdown ? 'inline-flex' : 'hidden'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className={(showingNavigationDropdown ? 'block' : 'hidden') + ' sm:hidden'}>
                    <div className="space-y-1 pb-3 pt-2">
                        <ResponsiveNavLink href={route('dashboard')} active={route().current('dashboard')}>Continuar</ResponsiveNavLink>
                    </div>

                    <div className="border-t border-gray-200 pb-1 pt-4 dark:border-gray-600">
                        <div className="flex items-center px-4">
                            <div className="flex-shrink-0">
                                <ApplicationLogo className="h-10 w-auto fill-current" />
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('profile.edit')}>Perfil</ResponsiveNavLink>
                            <ResponsiveNavLink href={route('logout')} method="post" as="button">Cerrar sesión</ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}

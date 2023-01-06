import { Disclosure  } from '@headlessui/react'
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline'
import './index.css'

const navigation = [
    { name: 'HOME', href: '#', current: true, soon: false },
    { name: 'UPCOMING', href: '#', current: false, soon: true },
    { name: 'PAST', href: '#', current: false, soon: true },
    { name: 'ABOUT', href: 'https://medium.com/@Arcadialaunchpad', current: false, soon: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <div className="nav-bar">
            <Disclosure as="nav" className="bg-none">
                {({ open }) => (
                    <>
                        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                            <div className="relative flex h-15.8 mt-2 mb-2 items-center justify-between">
                                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                    <div className="flex flex-shrink-0 items-center">
                                        <img
                                            className="block h-11 w-11 l-20 lg:hidden"
                                            src={process.env.PUBLIC_URL + '/assets/img/logo.png'}
                                            alt="Your Company"
                                        />
                                        <img
                                            className="hidden h-11 w-11 lg:block"
                                            src={process.env.PUBLIC_URL + '/assets/img/logo.png'}
                                            alt="Your Company"
                                        />
                                    </div>
                                    <div className="hidden sm:m-auto sm:block">
                                        <div className="flex space-x-4 navbar-items">
                                            {navigation.map((item) => (
                                                item.soon ? (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? 'bg-none text-white' : 'text-white hover:bg-none hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        <span className="badge badge-upcoming">SOON</span>
                                                        {item.name}
                                                    </a>
                                                ):(<a
                                                        key={item.name}
                                                        href={item.href}
                                                        className={classNames(
                                                            item.current ? 'white-text bg-none text-white' : 'text-white hover:bg-none hover:text-white',
                                                            'px-3 py-2 rounded-md text-sm font-medium'
                                                        )}
                                                        aria-current={item.current ? 'page' : undefined}
                                                    >
                                                        {item.name}
                                                    </a>
                                                    )
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                    <button
                                        type="button"
                                        className="rounded-full bg-none p-1 m-1 text-gray-400 hover:text-white focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                                        <img src={process.env.PUBLIC_URL + "/assets/icons/twitter.svg"} className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-full bg-none p-1 m-1 text-gray-400 hover:text-white focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                                        <img src={process.env.PUBLIC_URL + "/assets/icons/joystick.svg"} className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                    <button
                                        type="button"
                                        className="rounded-full bg-none p-1 m-1 text-gray-400 hover:text-white focus:outline-none focus:ring-0 focus:ring-white focus:ring-offset-0 focus:ring-offset-gray-800"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                                        <img src={process.env.PUBLIC_URL + "/assets/icons/plane.svg"} className="h-5 w-5" aria-hidden="true" />
                                    </button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="sm:hidden">
                            <div className="space-y-1 px-2 pt-2 pb-3">
                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as="a"
                                        href={item.href}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block px-3 py-2 rounded-md text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    )
}

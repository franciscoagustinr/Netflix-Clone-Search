import React from 'react'
import { Form } from '../Components/Form';

// IMGS
import netflix from '../img/netflix-logo.png';
import netflixM from '../img/netflix-logo-N1.png'
import bellimg from '../img/bell-solid-24.png';
import iconUser from '../img/iconUser.jpg';
import chevronDown from '../img/chevron-down-regular-24.png';



export const NavBar = ({ movies, setMovies, searchValue, setSearchValue, last, setLast }) => {

    const logoClick = () => {
        setMovies([])
    }

    return (
        <>
            {/* NAV */}
            <nav className="flex flex-row flex-nowrap content-center items-center justify-evenly 
                            h-20 
                            mb-2 
                            m-auto
                            bg-#282c34">

                {/* MENU CONTENT */}
                <div className="menu_content 
                                flex flex-row flex-nowrap content-center items-center justify-evenly 
                                w-5/12">

                    <img src={netflix}
                        alt='Logo'
                        className='logo w-32 cursor-pointer'
                        onClick={logoClick}
                    />
                    <img src={netflixM}
                        alt='LogoM'
                        className='logoM 
                                    w-32 
                                    cursor-pointer'
                        onClick={logoClick}
                    />

                    <ul className='flex items-center 
                                   text-sm text-center text-gray-300
                                   '>
                        <li className="text-center hover:text-white 
                                       cursor-pointer 
                                       duration-200
                                       ">Home</li>
                        <li className="text-center hover:text-white 
                                       cursor-pointer 
                                       duration-200 
                                       " >Series</li>
                        <li className="text-center hover:text-white 
                                       cursor-pointer 
                                       duration-200 
                                       " >Movies</li>
                        <li className="text-center hover:text-white 
                                       cursor-pointer 
                                       duration-200 
                                       " >New & Popular</li>
                        <li className="text-center hover:text-white 
                                       cursor-pointer 
                                       duration-200 
                                       " >My list</li>
                        <li className="text-center hover:text-white 
                                       cursor-pointer 
                                       duration-200 
                                       " >Watch Again</li>
                    </ul>
                </div>

                {/* SEARCH CONTENT */}
                <div className="search_content
                                flex flex-row flex-nowrap content-center items-center justify-evenly
                                ">

                    {/* SEARCH MOVIES FORM */}
                    <Form setMovies={setMovies}
                        searchValue={searchValue} setSearchValue={setSearchValue}
                        setLast={setLast}
                    />

                    <img src={bellimg}
                        alt='Notification Logo'
                        className='search-img mr-5'
                    />

                    <img src={iconUser}
                        alt='User Profile'
                        className='search-img w-10 mr-2'
                    />

                    <img src={chevronDown}
                        alt='More'
                        className='search-img'
                    />
                </div>

            </nav>

        </>
    )
}

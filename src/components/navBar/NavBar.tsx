import './NavBar.module.css'
export const NavBar = () => {
    return (
        <nav className='nav'>
            <div className={'item'}><a>Profile</a></div>
            <div className={'item'}><a>Message</a></div>
            <div className={'item'}><a>News</a></div>
            <div className={'item'}><a>Music</a></div>
            <div className={'item'}><a>Settings</a></div>
        </nav>
    )
}
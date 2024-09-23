import logo from '../assets/react.svg'

function Navbar () {
  return (
      <header>
        <nav className='nav-container'>
            <div>
                <img src={logo} alt="react logo" width="30px" />
                <h2>ReactFacts</h2>
            </div>
            
            <h4>React Course - Project 1</h4>   
            
        </nav>
      </header>
  )
}

export default Navbar

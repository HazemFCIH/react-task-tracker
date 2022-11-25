import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
const onClick= () => {
    console.log('hello');
}
  return (
        <header>
            <h1>{title}</h1>
            <Button text='Add' onClick={onClick}></Button>
           
        </header>
    )
}
Header.defaultProps = {
    title: 'Task Tracker',
}
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header
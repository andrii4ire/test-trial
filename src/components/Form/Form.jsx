import './styles.scss';
const Form = () => {
    return <div className='form'>
        <div className='textRegistr'>Registration</div>
        <div className='wrapp'>
            <div className='textRegistr'>Email</div>
            <input type="email" />
            <div className='textRegistr'>Password</div>
            <input type="password" />
        </div>
        <div className='wrappButt'>
            <button className='butt'>Sign in</button> 
        </div>
        
    </div>
}
export default Form;
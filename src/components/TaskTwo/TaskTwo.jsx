import { useState } from 'react/cjs/react.development';
import './styles.scss'
const TaskTwo= ()=>{
    const[users,setUsers]=useState(['ira'])
    const[name,setName]=useState('');
    const[nameCheck,setNameCheck]=useState('');
    console.log(users,'****')

    return(
        <div>
            <div>
                <input type="text" placeholder='Name' checked={name} onChange={(e)=>{
                  setName( e.target.value) 
                }} />
                <div className='buttom' onClick={()=>{
                    const newUsers = [...users, name]
                    setUsers(newUsers)
                    console.log('i am here')

                }} >Save</div>
            </div>
            <div>
                <input type="text" placeholder='NameCheck' checked={nameCheck} onChange={(e)=>{
                    setNameCheck(e.target.value)
                    
                }} />
                <div className='buttom' onClick={()=>{
                     if(users.includes(nameCheck)){
                        console.log('I am there')
                        return true
                       }else{
                        console.log('I am not there')
                        return false
                       }
                }}>Check</div>
            </div>
        </div>
    )

}
export default TaskTwo;
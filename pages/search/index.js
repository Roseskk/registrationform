import config from "../../cfg/api";
import {useRouter} from "next/router";


export default function Search(props) {
    const router = useRouter();

    const handleClick = (e,id) => {
        console.log(id)
        router.push(`search/${id}`)
    }

    return(
        <ul className={'list-decimal mx-auto flex flex-col gap-2  p-10'}>
            {
                props.students.map((student,key)=>{
                    return(
                        <li  onClick={(event)=>handleClick(event,student.id)} className={'flex gap-2 border rounded p-2 cursor-pointer'}  key={student.id}>
                            <span>{key}</span>
                            <span>{student.name}</span>
                            <span>{student.middleName}</span>
                            <span>{student.thirdName}</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}


export const getServerSideProps = async () => {
    const response = await fetch(`${config.url}form/search`)
    const students = await  response.json();
    return{
        props:{
            students
        }
    }
}
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc,collection } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../config/firebase';
interface CreateFormProps {
    title:string;
    description:string;
}
const postRef=collection(db,'posts')
const CreateForm = () => {
    const [user] = useAuthState(auth);
    const schema = yup.object().shape({
        title: yup.string().required("You must enter a title"),
        description: yup.string().required()
    });
    const {register,handleSubmit,formState:{errors}} = useForm<CreateFormProps>({
        resolver:yupResolver(schema),
    })
    const submitForm=async (data:CreateFormProps)=>{
        console.log(data);
        try{
            await addDoc(postRef,{
                   ...data,
                   username:user?.displayName,
                   userID:user?.uid,
            })
        
        }
        catch(err){
            console.log(err);
        }   ``
}
    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <input type="text"  placeholder="Title..." {...register('title')}/>
            <p>{errors.title?.message}</p>
            <textarea placeholder="Description" {...register('description')}/>
            <p>{errors.description?.message}</p>
            <button type='submit'>Submit</button>
        </form>
    )
}

export default CreateForm
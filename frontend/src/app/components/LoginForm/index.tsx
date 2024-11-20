'use client'
import { useForm } from "react-hook-form";
import { LoginRequest } from "@/app/types/Login/LoginReqest";
import { LoginResponse } from "@/app/types/Login/LoginResponse";
import { useLoginData } from "@/app/hooks/useLoginData";
import { useRouter } from "next/navigation";


export default function LoginForm() {

    const router = useRouter()
    const{setLoginData} = useLoginData()
    const {register,handleSubmit,formState: { errors },reset} = useForm<LoginRequest>()

    const onSubmit = handleSubmit(async (reqest:LoginRequest)=>{
        const response = await fetch('http://localhost:3001/auth/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', 
            },
            body: JSON.stringify({
                email: reqest.email,
                password: reqest.password,
            }),
        })
        const data:LoginResponse = await response.json() 
        if(data.token){
            // トークンの保持
            setLoginData(data)
            router.push('/')
        }else{
            reset()
        }
        
    })

    return (
      <form onSubmit={onSubmit}>

      <input {...register('email')}  />
      <input {...register('password')} type="password" />
      <button>送信</button>
      </form>
    );
  }
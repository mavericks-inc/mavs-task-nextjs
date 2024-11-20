'use client'
import { useRouter } from "next/navigation";
import styles from "./header.module.css";
import { useLoginData } from "@/app/hooks/useLoginData";

export default function Header (){
    const router = useRouter()
    const{loginData,setLoginData} = useLoginData()

    const logout = ()=>{
        setLoginData(undefined)
        router.push('/')

    }
    
    return (
        <div className={styles.header}>
            <h2 onClick={()=>router.push('/')}>メモアプリ</h2>
            {loginData && (
                <div>
                <p>ようこそ！</p>
                <p>{loginData?.email}さん</p>
            </div>
            )}
            
            {loginData ? <button onClick={logout}>ログアウト</button> :<button onClick={()=>router.push('/signin')}>サインイン</button>} 
        </div>
    )
}
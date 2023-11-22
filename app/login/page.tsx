'use client'

import React, {FormEvent} from "react";
import {login, register} from "@/firebase/auth";
import {useRouter} from 'next/navigation'
import Navbar from "@/components/Navbar";
import Main from "@/components/Main";
import admins from "../../admins.json";

function Page() {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const router = useRouter()


    const handleFormLogin = async (event: FormEvent) => {
        event.preventDefault()

        const {result, error} = await login(email, password);
        const {user} = result || {}

        if (error) {
            return console.log(error)
        }

        if (user && user.email && admins.includes(user.email)) {
            return router.push("/admin")
        }

        return router.push("/user")
    }

    const handleFormSignUp = async (event: FormEvent) => {
        event.preventDefault()

        const {result, error} = await register(email, password);
        const {user} = result || {}

        if (error) {
            return console.log(error)
        }

        if (user && user.email && admins.includes(user.email)) {
            return router.push("/admin")
        }

        return router.push("/user")
    }
    return (<div>
            <Navbar/>

            <Main>

                <div className={"flex"}>
                    <div className="w-1/2 mx-auto p-10">
                        <h1 className="mt-40 font-bold text-2xl text-zinc-700">Login</h1>
                        <form onSubmit={handleFormLogin} className="form">
                            <label htmlFor="email">
                                <p className={"font-bold text-zinc-700"}>Email</p>
                                <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email"
                                       id="email"
                                       placeholder="example@mail.com"
                                       className={"w-full py-2 px-4 rounded-lg text-lg"}/>
                            </label>
                            <label htmlFor="password" className={"w-full"}>
                                <p className={"font-bold text-zinc-700"}>Senha</p>
                                <input onChange={(e) => setPassword(e.target.value)} required type="password"
                                       name="password"
                                       id="password" placeholder="senha"
                                       className={"w-full py-2 px-4 rounded-lg text-lg"}/>
                            </label>
                            <button type="submit"
                                    className={"bg-red-700 rounded-lg py-2 px-4 block w-full text-white font-bold mt-2"}>Entrar
                            </button>
                        </form>
                    </div>

                    <div className="w-1/2 mx-auto p-10">
                        <h1 className="mt-40 font-bold text-2xl text-zinc-700">Registrar</h1>
                        <form onSubmit={handleFormSignUp} className="form">
                            <label htmlFor="email">
                                <p className={"font-bold text-zinc-700"}>Email</p>
                                <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email"
                                       id="email"
                                       placeholder="example@mail.com"
                                       className={"w-full py-2 px-4 rounded-lg text-lg"}/>
                            </label>
                            <label htmlFor="password">
                                <p className={"font-bold text-zinc-700"}>Password</p>
                                <input onChange={(e) => setPassword(e.target.value)} required type="password"
                                       name="password"
                                       id="password" placeholder="password"
                                       className={"w-full py-2 px-4 rounded-lg text-lg"}/>
                            </label>

                            <button type="submit"
                                    className={"bg-red-700 rounded-lg py-2 px-4 block w-full text-white font-bold mt-2"}>Criar
                                Conta
                            </button>
                        </form>
                    </div>
                </div>

            </Main>
        </div>
    );
}

export default Page;

// import { ReactNode } from "react";
// import { redirect } from "next/navigation";
//
// import { isAuthenticated } from "@/lib/actions/auth.action";
//
// const AuthLayout = async ({ children }: { children: ReactNode }) => {
//     const isUserAuthenticated = await isAuthenticated();
//     if (isUserAuthenticated) redirect("/");
//
//     return <div className="auth-layout">{children}</div>;
// };
//
// export default AuthLayout;

import {ReactNode} from "react";



export default function AuthLayout({children}: {children: ReactNode}) {
    return (
        <div className="min-h-screen w-full flex items-center justify-center"> {children}</div>)
}
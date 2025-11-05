// import AuthForm from "@/components/AuthForm";
//
// const Page = () => {
//     return <AuthForm type="sign-in"/>
// }
// export default Page

import {redirect} from "next/navigation";

export default function HomePage(){
    redirect("/sign-in");
}
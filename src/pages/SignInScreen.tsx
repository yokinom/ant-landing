import Hero from "../components/Hero";
import SignIn from "../components/SignIn";

const SignInScreen = () => {
    return (
        <div className="grid md:grid-cols-2 grid-cols-1 h-screen">
            <div className="hidden md:block md:grid-cols-1">
                <Hero />
            </div>
            <div className="grid-cols-1 bg-slate-50 flex justify-center items-center flex-col p-4 w-full">
                <SignIn />
            </div>
        </div>
    
    )
}

export default SignInScreen;
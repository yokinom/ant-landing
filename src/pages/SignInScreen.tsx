import Hero from "../components/Hero"
import SignIn from "../components/SignIn"

const SignInScreen = () => {
    return (
        <div className="flex w-screen gap-1 min-h-screen max-auto">
            <Hero />
            <SignIn />
        </div>
    )
}

export default SignInScreen;
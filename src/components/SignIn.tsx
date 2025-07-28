import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"


const SignIn = () => {

    return (
        <div className="md:w-[50%] flex justify-center items-center w-full flex-col relative mx-auto bg-slate-50">
            <div className="max-w-xl rounded-xl bg-white w-full min-h-[550px] shadow-sm shadow-slate-500 mx-auto px-6 py-9 flex items-center flex-col">
                <div className="text-center w-full gap-2">
                    {/* <img src={Logo} alt="logo" /> */}
                    <span className="text-lg md:text-xl">CodeAnt AI</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-semibold mt-9">Welcome to CodeAnt AI</h1>
                <Tabs defaultValue="saas" className="w-full mt-5">
                    <TabsList className="grid w-full grid-cols-2 bg-[#FAFAFA]">
                        <TabsTrigger
                            value="saas"
                            className="text-base md:text-xl data-[state=active]:bg-[#1570EF] data-[state=active]:text-white">
                            SAAS
                        </TabsTrigger>
                        <TabsTrigger
                            value="self-hosted"
                            className="text-base md:text-xl data-[state=active]:bg-[#1570EF] data-[state=active]:text-white">
                            Self Hosted
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="saas" className="mt-5 ">
                        <div className="flex items-center gap-4 border border-[#D8DAE5] rounded-lg p-4 w-full cursor-pointer hover:bg-slate-50">
                            <img src="" alt="login" className="w-5 md:w-6 h-5 md:h-6" />
                            <span className="text-base md:text-xl">Continue with Email</span>
                        </div>
                    </TabsContent>
                    <TabsContent value="self-hosted" className="flex flex-col mt-5 items-center w-full gap-4">
                        <div className="flex items-center gap-4 border border-[#D8DAE5] rounded-lg p-4 w-full cursor-pointer hover:bg-slate-50">
                            <img src="" alt="login" className="w-5 md:w-6 h-5 md:h-6" />
                            <span className="text-base md:text-xl">Self Hostted GitLab</span>
                        </div>
                    </TabsContent>
                </Tabs>
                <hr />
            </div><h2 className="text-center mt-4 text-sm">By signing up you agree to the <b>Privacy Policy</b>.</h2>
        </div>
    )
}

export default SignIn
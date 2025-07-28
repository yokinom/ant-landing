import { useState } from "react";

import bitBucket from "../assets/icons/bitBucket.svg";
import github from "../assets/icons/github.svg";
import gitLab from "../assets/icons/gitLab.svg";
import azure from "../assets/icons/azure.svg";
import keyIcon from "../assets/icons/keyIcon.svg";
import Logo from "../assets/ant-ui-small.svg";

import AuthButton from "./authButton";

const SignIn = () => {

    const [tab, setTab] = useState<string>('saas');

    const options = [
        {
            icon: github,
            label: "Sign in with GitHub",
            type: "saas"
        },
        {
            icon: bitBucket,
            label: "Sign in with BitBucket",
            type: "saas"
        },
        {
            icon: azure,
            label: "Sign in with Azure Devops",
            type: "saas"
        },
        {
            icon: gitLab,
            label: "Sign in with GitLab",
            type: "saas"
        },
        {
            icon: gitLab,
            label: "Self Hosted GitLab",
            type: "selfhosted"
        },
        {
            icon: keyIcon,
            label: "Sign in with SSO",
            type: "selfhosted"
        }
    ]

    return (
        <>
            <div className="border border-[#E9EAEB] w-full max-w-[408px] min-h-[582px] rounded-lg shadow-sm lg:max-w-[672px] lg:max-h-[602px] lg:rounded-xl">

                <div className="border-b w-full p-6 space-y-6 lg:max-h=[276px] lg:pt-9 lg:pr-6 lg:pb-9 lg:pl-6">

                    <div className="space-y-4 lg:max-w-[624px] lg:h-[124px]">
                        <div className="flex justify-center items-center gap-2">
                            <img src={Logo} alt="CodeAnt AI Logo" className="h-8" />
                            <h2 className="text-2xl text-[30px] font-normal">
                                CodeAnt AI
                            </h2>
                        </div>
                        <h3 className="text-center font-semibold text-2xl leading-[48px] lg:text-[32px]">
                            Welcome to CodeAnt AI
                        </h3>
                    </div>

                    <div className="rounded-md bg-[#FAFAFA]">
                        <div className="flex border border-[#E9EAEB] rounded-md">
                            <button
                                className={`flex-1 font-semibold py-3 px-4 border-r  rounded-md ${tab === 'saas' ? 'bg-[#1570EF] text-white' : ''}`}
                                onClick={() => setTab('saas')}
                            >
                                SAAS
                            </button>
                            <button
                                className={`flex-1 font-semibold py-3 px-4 rounded-md ${tab === 'selfhosted' ? 'bg-[#1570EF] text-white' : ''}`}
                                onClick={() => setTab('selfhosted')}
                            >
                                Self Hosted
                            </button>
                        </div>
                    </div>
                </div>

                <div className="p-6 space-y-4">
                    {
                        options.map((authOption, index) => (
                            authOption.type === tab && (
                                <AuthButton key={index} icon={authOption.icon} label={authOption.label} />
                            )
                        ))
                    }
                </div>
            </div>

            <p className="text-base p-6 mt-8">
                By signing up you agree to the <span className="font-bold leading-6 text-sm lg:text-base text-gray-900 hover:underline cursor-pointer">Privacy Policy</span>.
            </p>
        </>
    )
}

export default SignIn
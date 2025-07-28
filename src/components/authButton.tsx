import { useNavigate } from "react-router-dom";

type AuthButtonProps = {
    icon: string,
    label: string
}

const AuthButton = ({ icon, label }: AuthButtonProps) => {

    const navigation = useNavigate();

    return (
        <button className="border border-[#E9EAEB] w-full rounded-md py-3 px-4" onClick={() => {
            navigation("/")
        }}>
            <div className="flex gap-2 justify-center">
                <img src={icon} alt="" className="w-6 h-6" />
                <span className="font-semibold">
                    {label}
                </span>
            </div>
        </button>
    )
}

export default AuthButton;
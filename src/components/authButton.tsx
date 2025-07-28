import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/auth";

type AuthButtonProps = {
    icon: string,
    label: string
}

const AuthButton = ({ icon, label }: AuthButtonProps) => {

    const navigation = useNavigate();
    const setProvider = useAuthStore((state) => state.setProvider)

    return (
        <button className="border border-[#E9EAEB] w-full rounded-md py-3 px-4" onClick={() => {
            setProvider(label);
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
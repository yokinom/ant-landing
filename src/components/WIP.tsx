type WipProps = {
    message: string
}

const WIP = ({ message }: WipProps) => {
    return (
        <div className="min-w-full min-h-screen flex items-center justify-center">
            <h2 className="text-xl text-gray-500">
                {message}
            </h2>
        </div>
    )
}

export default WIP;
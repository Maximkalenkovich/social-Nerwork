type MessageProps = {
    message: string
}
export const Message = (props: MessageProps) => {
    return (
        <div>
            {props.message}

        </div>
    )
}
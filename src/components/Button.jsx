import { useState } from "react";

const Button = ({children}) => {

    const [confirm, setConfirm] = useState(false);

    const renderConfirm = () => {
        if(confirm) return null;
        return (
            <button onClick={() => setConfirm(true)} className={'btn primary'}>Show?</button>
        )
    }

    const renderSet = () => {
        if(!confirm) return null;
        return (
            <>
                {children}
            </>
        )
    }

    return (
        <>
            {renderConfirm()}
            {renderSet()}
        </>
    )
}

export default Button
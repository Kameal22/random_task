import { useState } from "react";

const useInputState = (initialValue = "") => {
    const [value, setValue] = useState(initialValue);
    const [limitedValue, setLimitedValue] = useState(initialValue);
    const [error, setError] = useState(initialValue);

    const handleChange = (e: React.FormEvent<HTMLTextAreaElement>) => {
        setValue(e.currentTarget.value);
    };

    const handleLimitedChange = (e: React.FormEvent<HTMLInputElement>) => {
        if (limitedValue.length > 30) {
            setError("Cannot excide 30 characters");
        } else {
            setError("");
        }
        setLimitedValue(e.currentTarget.value);
    };

    const reset = () => {
        setValue("");
    };

    const handleError = (msg: string) => {
        setError(msg);
    };

    return [
        value,
        handleChange,
        limitedValue,
        handleLimitedChange,
        error,
        handleError,
        reset,
    ] as const;
};

export default useInputState;
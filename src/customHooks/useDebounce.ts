import { useEffect, useState } from "react";

export const useDebounce = <T extends string>(value: T, delay = 500) => {
    const [debouncedValue, setDebouncedValue] = useState<string | T>(value);

    useEffect(() => {
        const hasWhitespace = /\S/.test(value);
        const withoutWhitespace = value.replace(/\s/g, "");

        if (hasWhitespace) {
            const timeout = setTimeout(() => {
                setDebouncedValue(withoutWhitespace);
            }, delay);

            return () => clearTimeout(timeout);
        }
    }, [value, delay]);

    return debouncedValue;
};

import { useEffect, useState } from "react"

type twProps = {
    text: string,
    speed?: number,
}

export const useTw = ({ text, speed = 1000 }: twProps): string => {
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        setCurrentText('');

        let index: number = 0;

        if (!text) return;

        const interval = setInterval(() => {
            setCurrentText(text.slice(0, index + 1));

            index++;

            if (index >= text.length) {
                clearInterval(interval);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed])

    return currentText;
}
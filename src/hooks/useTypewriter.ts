import { useEffect, useState } from "react"

type useTypewriter = {
    text: string,
    speed?: number,
}

export const useTypewriter = ({ text, speed = 1000 }: useTypewriter): string => {
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
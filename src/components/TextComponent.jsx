import { useSelector, UseSelector } from "react-redux";

const TextComponent = () => {
    const data = useSelector((state) => state.displayText.value);
    return (
    <>
    <p>
        This is text component, here we will see the data entered in the input field from app.js component using redux tool kit
    </p>
    <p>{data}</p>
    </>
    );
}

export default TextComponent
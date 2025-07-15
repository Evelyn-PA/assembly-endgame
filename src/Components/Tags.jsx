import { languages } from "../language"
import { nanoid } from "nanoid"
import icon from "../assets/skull-solid.svg"

export default function Tags(props) {
    return (
        <div className="tags-container">
            {languages.map((dt, index) => (
                <Tag
                    key={nanoid()}
                    name={dt.name}
                    backgroundColor={dt.backgroundColor}
                    color={dt.color}
                    isWrong={props.isWrong[index]}
                />
            ))}
        </div>
    )
}

function Tag(props) {
    const style = {
        backgroundColor: props.backgroundColor,
        color: props.color
    }

    return (
        <p style={style} className={`tags ${props.isWrong ? "tag-wrong" : ""}`}>
            <span>{props.name}</span>
        </p>
    )
}
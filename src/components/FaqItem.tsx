import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react"

interface FaqItemProps {
    question: string;
    answer: string;
}

const FaqItem: React.FC<FaqItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
        <div className={isOpen ? "faq-item faq-item__active" : "faq-item"}>
            <h4 className="faq-item-question">{question}</h4>
            { isOpen && <p className="faq-item-answer">{answer}</p> }
            <div className={isOpen ? "faq-item-btn faq-item-btn__active" : "faq-item-btn"} onClick={() => setIsOpen(!isOpen)}>
                <FontAwesomeIcon icon={isOpen ? faMinus : faPlus}/>
            </div>
        </div>
    )
}

export default FaqItem;
import "./Action.scss";

interface ActionProps {
    name: string;
    src: string;
    descr: string;
    handler: () => void;
}

export default function Action({ name, src, descr, handler }: ActionProps) {
    return (
        <div className="action" id={name}>
            <div className="action-button" onClick={handler}>
                <img src={src} alt={descr} />
            </div>
            <p>{descr}</p>
        </div>
    );
}

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
            <div className="action-button">
                <img src={src} alt={descr} onClick={handler} />
            </div>
            <p>{descr}</p>
        </div>
    );
}

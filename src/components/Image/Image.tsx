import "./Image.scss";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";

interface ImageProps {
    id: number;
    name: string;
}

export default function Image({ id, name }: ImageProps) {
    const [image, setImage] = useState("");

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/images/search?category_ids=${id}`);
            setImage(response.data[0].url);
        })();
    }, [id]);

    return <img src={image} alt={name} />;
}

import "./CatImage.scss";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import Loading from "../Loading/Loading";

interface ImageProps {
    id: number;
    name: string;
}

export default function CatImage({ id, name }: ImageProps) {
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/images/search?category_ids=${id}`);
            setImage(response.data[0].url);
            setLoading(false);
        })();
    }, [id]);

    if (loading) return <Loading />;
    else return <img src={image} alt={name} />;
}

import "./Home.scss";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import Image from "../../components/Image/Image";

interface CatCategories {
    id: number;
    name: string;
    url: string;
}

export default function Home() {
    const [categories, setCategories] = useState<CatCategories[]>([]);

    useEffect(() => {
        (async () => {
            const categoriesRes = await axios.get("/categories");
            setCategories(categoriesRes.data);
        })();
    }, []);

    return (
        <div id="home-page">
            <h3>Select a category</h3>
            <ul>
                {categories.map(category => {
                    return (
                        <li key={category.id}>
                            <Image id={category.id} name={category.name} />
                            <h4>{category.name}</h4>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

import "./Home.scss";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import CatImage from "../../components/CatImage/CatImage";
import { Link } from "react-router-dom";

interface CatCategories {
    id: number;
    name: string;
    url: string;
}

export default function Home() {
    const [categories, setCategories] = useState<CatCategories[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const categoriesRes = await axios.get("/categories");
            setCategories(categoriesRes.data);
            setLoading(false);
        })();
    }, []);

    return (
        <div id="home-page">
            <h3>Select a category</h3>
            <ul className={loading ? "" : "ready"}>
                {categories.map(category => (
                    <li>
                        <Link
                            key={category.id}
                            to={{
                                pathname: `/category/${category.name}`,
                                state: { id: category.id },
                            }}
                        >
                            <CatImage id={category.id} name={category.name} />
                            <h4>{category.name}</h4>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

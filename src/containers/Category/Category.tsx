import "./Category.scss";
import axios from "../../utils/axios";
import { useEffect, useState } from "react";
import { useLocation, useHistory } from "react-router";
import Loading from "../../components/Loading/Loading";
import Action from "../../components/Action/Action";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

interface Location {
    id: number;
}

interface ImageType {
    id: string;
    url: string;
    categories: [{ id: number; name: string }];
}

interface Stats {
    rated: number;
    petted: number;
    notPetted: number;
    skipped: number;
}

type actions = "rated" | "petted" | "notPetted" | "skipped";

export default function Category() {
    const [images, setImages] = useState<string[]>([]);
    const [imageIdx, setImageIdx] = useState(0);
    const [loading, setLoading] = useState(true);
    const [stats, setStats] = useState<Stats>({
        rated: 0,
        petted: 0,
        notPetted: 0,
        skipped: 0,
    });
    const { state } = useLocation<Location>();
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const response = await axios.get(`/images/search?category_ids=${state.id}&limit=10`);
            const imageUrls = response.data.map(({ url }: ImageType) => url);
            setImages(imageUrls);
            setLoading(false);
        })();
    }, [state.id]);

    useEffect(() => {
        stats.rated + stats.skipped >= 10 && history.push({ pathname: "/overview", state: stats });
    }, [stats, history]);

    const handleAction = (type: actions) => {
        if (type === "skipped") {
            setStats({
                ...stats,
                [type]: stats[type] + 1,
            });
        } else {
            setStats({
                ...stats,
                rated: stats.rated + 1,
                [type]: stats[type] + 1,
            });
        }

        imageIdx < 9 && setImageIdx(imageIdx + 1);
    };

    return (
        <div id="rate">
            {loading ? (
                <Loading />
            ) : (
                <Carousel infiniteLoop={false} showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} selectedItem={imageIdx}>
                    {images.map((pic, idx) => (
                        <img key={idx} src={pic} alt="cat" />
                    ))}
                </Carousel>
            )}
            <div id="under">
                <h6>{`Cat ${imageIdx + 1}/10`}</h6>
                <div id="actions">
                    <Action name="dont-pet" src="/assets/DontPet.svg" descr="Don't pet it!" handler={() => handleAction("notPetted")} />
                    <Action name="skip" src="/assets/Skip.svg" descr="Skip it!" handler={() => handleAction("skipped")} />
                    <Action name="pet" src="/assets/Pet.svg" descr="Pet it!" handler={() => handleAction("petted")} />
                </div>
            </div>
        </div>
    );
}

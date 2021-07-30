import "./Overview.scss";
import { useLocation, useHistory } from "react-router-dom";
import { useEffect } from "react";
import Loading from "../../components/Loading/Loading";

interface Stats {
    rated: number;
    petted: number;
    notPetted: number;
    skipped: number;
}

export default function Overview() {
    const { state } = useLocation<Stats>();
    const history = useHistory();

    useEffect(() => {
        !state && history.push("/");
    }, [history, state]);

    const sameCategory = () => history.goBack();
    const newCategory = () => history.push("/");

    if (!state) return <Loading />;
    else
        return (
            <div id="overview">
                <h4>Cats seen: {state.rated + state.skipped}</h4>
                <div id="results">
                    <div id="not-petted" className="total">
                        <div className="category-result">
                            <img src="/assets/DontPet.svg" alt="not petted" />
                        </div>
                        <div className="numbers">
                            <h3>{state.notPetted}</h3>
                            <h6>Cats you didn't pet</h6>
                        </div>
                    </div>
                    <div id="skipped" className="total">
                        <div className="category-result">
                            <img src="/assets/Skip.svg" alt="skipped" />
                        </div>
                        <div className="numbers">
                            <h3>{state.skipped}</h3>
                            <h6>Cats you skipped</h6>
                        </div>
                    </div>
                    <div id="petted" className="total">
                        <div className="category-result">
                            <img src="/assets/Pet.svg" alt="petted" />
                        </div>
                        <div className="numbers">
                            <h3>{state.petted}</h3>
                            <h6>Cats you petted</h6>
                        </div>
                    </div>
                </div>
                <div id="restart">
                    <button onClick={sameCategory}>RESTART IN THE SAME CATEGORY</button>
                    <button onClick={newCategory}>SELECT NEW CATEGORY</button>
                </div>
            </div>
        );
}

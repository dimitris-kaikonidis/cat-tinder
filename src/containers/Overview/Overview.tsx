import "./Overview.scss";
import { useLocation } from "react-router-dom";

interface Stats {
    rated: number;
    petted: number;
    notPetted: number;
    skipped: number;
}

export default function Overview() {
    const { state } = useLocation<Stats>();
    return (
        <div id="overview">
            <h4>Cats seen: {state.rated + state.skipped}</h4>
            <div id="results">
                <div className="total">
                    <div className="category-result">
                        <img src="/assets/DontPet.svg" alt="not petted" />
                    </div>
                    <div className="numbers">
                        <h3>{state.notPetted}</h3>
                        <h6>Cats you didn't pet</h6>
                    </div>
                </div>
                <div className="total">
                    <div className="category-result">
                        <img src="/assets/Skip.svg" alt="skipped" />
                    </div>
                    <div className="numbers">
                        <h3>{state.skipped}</h3>
                        <h6>Cats you skipped</h6>
                    </div>
                </div>
                <div className="total">
                    <div className="category-result">
                        <img src="/assets/Pet.svg" alt="petted" />
                    </div>
                    <div className="numbers">
                        <h3>{state.petted}</h3>
                        <h6>Cats you petted</h6>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { Spacer } from "@/components/spacer/Spacer";
import Caraoselolex1 from "@/components/common/anasayfa/Caraoselolex1";
import Caraoselolex2 from "@/components/common/anasayfa/Caraoselolex2";
import Caraoselolex3 from "@/components/common/anasayfa/Caraoselolex3";
import Cardolex1 from "@/components/common/anasayfa/Cardolex1";
import Cardolex2 from "@/components/common/anasayfa/Cardolex2";

export default function page() {
    return (
        <div>
            <Caraoselolex1 />
            <Caraoselolex2 />
            <Caraoselolex3 />
            <div className="minato p-2">
            <Cardolex1 />
            </div>
            <div className="minato p-3">
            <Cardolex2/>
            </div>

        </div>
    );
}
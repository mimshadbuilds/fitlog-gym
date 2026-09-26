import MyPlans from "@/components/MyPlans/MyPlans";
import { Suspense } from "react";
    
    const MyPlanPage = () => {
        return (
            <Suspense fallback={null}>
                <MyPlans />
            </Suspense>
            );
        };

        export default MyPlanPage;
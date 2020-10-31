import { ProjectReference } from "typescript";

declare namespace Firebase {
    
    interface Root {
        subscriptions: {
            [subscriptionKey: string]: {
                phoneNumber: String
                raceType: String
                skillLevel: String
            };
        }
    }
}
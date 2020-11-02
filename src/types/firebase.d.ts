import { ProjectReference } from "typescript";

declare namespace Firebase {
    
    interface Root {

        users: {
            [id: string]: {
                email: String
                username: String
            }
        }
        subscriptions: {
            [subscriptionKey: string]: {
                phoneNumber: String
                raceType: String
                skillLevel: String
            };
        }
    }
}
import { ProjectReference } from "typescript";

declare namespace Firebase {
    
    interface Root {
        subscriptions: {
            [key: string]: {
                phoneNumber: String
                plan: Number
            };
        }
    }
}
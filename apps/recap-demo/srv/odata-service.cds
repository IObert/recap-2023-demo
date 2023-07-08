using { dev.recap.feedback as my } from '../db/schema';

service ODataService {
    entity Feedback as projection on my.Feedback;
}
using {dev.recap.feedback as my} from '../db/schema';

@protocol: [{
    kind: 'rest',
    path: '/api'
}]
service CatalogService {
    entity Feedback as projection on my.Feedback actions {
        action verify(code : String)
    }

}

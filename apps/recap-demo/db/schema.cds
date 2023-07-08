using {
    managed,
    cuid
} from '@sap/cds/common';

namespace dev.recap.feedback;

entity Feedback : managed, cuid {
    @mandatory name    : String(111);
    @mandatory company : String(1111);
    @mandatory email   : String(1111);
    followup           : Boolean;
    @mandatory title   : String(111);
    @mandatory desc    : String(1111);
    @mandatory url     : String(111);
    verified           : Boolean;
}

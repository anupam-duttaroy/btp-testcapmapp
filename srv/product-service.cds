using {testcapmapp.db as db} from '../db/schema';
service ProductService {
    
    entity Products as projection on db.Products;
    action testdest() returns String;
    action testnw() returns String;
}
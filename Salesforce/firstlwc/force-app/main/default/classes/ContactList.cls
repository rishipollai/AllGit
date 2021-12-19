public with sharing class ContactList {
    public ContactList() {

    }

    @AuraEnabled(cacheable=true)
    public static List<sObject> getContactList(String name){
        try {
            String key = '%'+name+'%';
            String query = 'select Id , Name , Phone From Contact Where Name LIKE:key';
            return Database.query(query);
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}

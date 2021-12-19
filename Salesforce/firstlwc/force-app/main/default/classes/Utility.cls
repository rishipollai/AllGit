public with sharing class Utility {
    public Utility() {

    }

    @AuraEnabled
    public static Map<String,Integer> mapDemo(){
        try {
            Map<String,Integer> testMap = new Map<String,Integer>();
            testMap.put('ram',1);
            testMap.put('hari',2);
            testMap.put('rishi',3);

            return testMap;
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}

'use strict';


function model() {
    return {
        dbName: null,
        setDBName(key) {
            if(!key.trim()) throw new Error('Man its not Possible, db key required');
            this.dbName = key;
        },


        // @todo fix for few todos
        setData(data) {
            let response = null;

            try {
                localStorage.setItem(this.dbName, JSON.stringify(data));
                response = {
                    success: true,
                    savedData: data
                };
            } catch (error) {
                response = {
                    success: false,
                    errors: error
                };
            }

            return response;
        },

        init(dbKey) {
            this.setDBName(dbKey);
        }
    };
}
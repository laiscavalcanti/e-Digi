export default class ValidateErrors {
    constructor(){
   
        this._errors = [];
    }
   
    addError(error){
        this._errors.push(error);
    }

    hasErrors(){
        return this._errors.length > 0;
    }

    get errors(){
        return this._errors;
    }
}
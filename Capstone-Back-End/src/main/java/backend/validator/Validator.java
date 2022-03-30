package backend.validator;

import java.util.regex.Pattern;

public class Validator {

//    It allows numeric values from 0 to 9
//    Both uppercase and lowercase letters from a to z are allowed
//    Allowed are underscore “_”, hyphen “-” and dot “.”
//    Dot isn't allowed at the start and end of the local-part
//    Consecutive dots aren't allowed
//    For the local part, a maximum of 64 characters are allowed
    public boolean checkEmail(String email) {
        String regex = "^(?=.{1,64}@)[A-Za-z0-9_-]+(\\\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\\\.[A-Za-z0-9-]+)*(\\\\.[A-Za-z]{2,})$";
        return Pattern.compile(regex)
                .matcher(email)
                .matches();
    }




}

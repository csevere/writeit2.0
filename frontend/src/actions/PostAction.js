import $ from 'jquery';

export default function(userData){
    console.log("PostAction")
    var thePromise = $.ajax({
        method: "POST",
        url: window.hostAddress + '/post',
        data: userData
    })
    // Reducers get payload
    return{
        type: "POST",
        payload: thePromise
    }
}/**
 * Created by mephisto on 7/29/17.
 */


function firstLast6([int1, length, int3]){
    var lengths = [int1,length,int3];
    var last = lengths.pop(6);
    if((last)==6){
        return true;
    }
    if(((int1)!= 6)&& (last!= 6)){
        return false;
    }
    if((int1) == 6){
        return true;
    }
}

function has23([string1, string2]){
    if(string1 == 2){
        return true;
    }
    if(string1 == 3){
        return true;
    }
    if(string2 == 2){
        return true;
    }
    if(string2 ==3){
        return true;
    }
    if((string1 || string2) > 3){
        return false;
    }
}

function fix23([length1, length2, length3]){
    if((length1 == 2)&&(length2 == 3)){
        return ([length1, 0, length3])
    }
    if((length2 ==2)&&(length3 ==3)){
        return ([length1, length2, 0])
    }
    if((length2 ==2)&&(length3!=3)){
        return ([length1,length2,length3]);
    }
    if((length1==2)&& (length2 != 3)){
        return ([length1,length2,length3]);
    }
}

function countYZ(string){
    var count = 0;
    string = string.toLowerCase();
    for(var i = 0; i<string.length; i++){
        if(string[i]== " "){
          if(string[i-1]== "y"|| string[i-1]== "z"){
              count = count+1;
          }
        }
    }
    if((string[string.length-1]=="y")||(string[string.length-1]=="z")){
        count = count+=1;
    }
    return count;
}

function endOther(string1, string2){
    var str1 = string2.toLowerCase();
    var str = string1.toLowerCase();
    var n = str.endsWith(str1) || str1.endsWith(str);
    return n
}

function starOut(string){
    var str = ""
    for (var i = 0; i<string.length; i++){
        if(string[i] != "*" && string[i-1] != "*" && string[i+1] != "*") {
            str = str + string[i]
        }
    }
    return str;
}

function getSandwich(string){
    var  f = string.indexOf("bread");
    var l = string.lastIndexOf("bread");
    var breadl = 5;
    if( f==l) {
        return "";
    } else { var newString =string.substring(f= breadl){
        return newString;
        }
    }

}

function canBalance(array){
    var sumOne = 0;
    var sumTwo = 0;
    for(var i= 0; i<array.length; i++){
        for(var l=0; l<i; l++){
            sumOne += (array[l]);
        }
        for( var k=l; k<array.length; k++){
            sumTwo += (array[k]);
        }
        if(sumOne==sumTwo){
            return true;
        }
    }
}

function countClumps(array) {
    var count = 0;
    for (var i = 0; i < array.length; i++) {
        if ((array[i] == array[i + 1] && array[i] != array[i - 1])) {
            count = count + 1;
        }

    }
    return count;
}


function evenlySpaced(int1, int2, int3){
    if((int2-int1)==(int3)){
        return true;
    }
    if((int2+int3)==(int1)){
        return true;
    }
    if((int2-int1)==(int3-int2)){
        return true;
    }
    if((int3-int2)>(int2-int1)){
        return false;
    }
    if((int3-int2)<(int2-int1)){
        return false;
    }
}
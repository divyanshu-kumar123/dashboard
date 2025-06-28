export default function setTextColor(className, mainVal){
    if(mainVal >= 0){
        return className + " text-green-c"
    }else{
        return className + " text-red-c"
    }
}
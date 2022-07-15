export const getArchitects = () => {
    const y = document.getElementsByTagName("a");
    const x = document.getElementsByTagName("span");
    console.log(y)
    console.log("hiiii")
    let result = [];
    for (var i = 0; i < y.length; i++) {
        result.push(y[i].id);
    }
    // for (var i = 0; i < arr2.length; i++) {
    //     result.push(arr2[i]);
    // }
    return result
}

export const getClassical = (arr1, arr2) => {

}

export const getActive = (arr1, arr2) => {

}

export const getBonannoPisano = (arr1, arr2) => {

}
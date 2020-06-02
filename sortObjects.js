const sortObjects = function(arrayOfObjects, objectKeyStartIndex) { 
        arrayOfObjects.sort((a, b) => {
            let i = objectKeyStartIndex                       
            const recurFoo = function() {
                if(Object.values(a)[i] > Object.values(b)[i]) {
                    return 1
                }
                else if(Object.values(a)[i] && (Object.values(a)[i] === Object.values(b)[i])) {
                    i++   
                    return recurFoo()
                }
                else if(Object.values(a)[i] < Object.values(b)[i]) {
                    return -1
                }
            }
            return recurFoo()
        })
        return arrayOfObjects   
    }
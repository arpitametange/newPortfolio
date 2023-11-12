
/////"Callback hell" is a term used to describe a situation in asynchronous programming where there are numerous nested callback functions, making the code difficult to read, understand, and maintain. This problem often occurs when dealing with multiple asynchronous operations that depend on each other's results.

///To alleviate callback hell, developers have adopted different techniques and patterns over time. One popular approach is to use promises or async/await syntax, which provides a more structured and readable way to handle asynchronous operations. Promises allow you to chain operations together, reducing the nesting of callbacks




asyncOperation1(function(result1) {
    asyncOperation2(result1, function(result2) {
        asyncOperation3(result2, function(result3) {
            // More nested callbacks...
        });
    });
});


//using promise
asyncOperation1()
    .then(result1 => asyncOperation2(result1))
    .then(result2 => asyncOperation3(result2))
    .then(result3 => {
        // Handle the final result
    })
    .catch(error => {
        // Handle errors
    });


//using aync await
    try {
        const result1 = await asyncOperation1();
        const result2 = await asyncOperation2(result1);
        const result3 = await asyncOperation3(result2);
        // Handle the final result
    } catch (error) {
        // Handle errors
    }
    
    
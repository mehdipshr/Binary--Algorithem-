// جستجوی دودویی (Binary)

// جستجوی دودویی در علوم رایانه به نام جستجوی نیم-بازه یا جستجوی لگاریتمی نیز شناخته می‌شود.
//  این الگوریتم جستجو موقعیت مقدار هدف را در یک آرایه مرتب می‌یابد. 
// نکته مهم که باید توجه داشته باشید این است که برای پیاده‌سازی جستجوی دودویی،
// آرایه حتماً باید مرتب‌سازی شده باشد.

// :پیچیدگی زمانی
// از آنجا که ناحیه جستجو در هر بار تکرار بر دو تقسیم می‌شود، پیچیدگی زمانی این الگوریتم برابر با O(log(n)) است.

function binarySearch(arr, item) {
    let startIndex = 0;
    let endIndex = arr.length - 1;

    while (startIndex < endIndex) {
        let middleIndex = Math.floor((startIndex + endIndex) / 2);

        if (arr[middleIndex] === item) {
            return `Found at index ${middleIndex}`;
        }

        if (arr[middleIndex] < item) {
            startIndex = middleIndex + 1;
        } else {
            endIndex = middleIndex - 1;
        }
    }

    return "Not Found";
}

console.log(binarySearch([5, 10, 20, 30, 40], 30));
//output: Found at index 3
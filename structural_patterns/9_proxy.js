// proxy - це такий обект(обгортка довколо цільова обекта) між, користувачем і цільовим обектом який при певних ситуаціях може змінювати та визивати поля цільова обекта, а при інших ситуаціях - ні, не дозволяти робити зміни або обробляти певним чином запроси на зміни чи використання полей обекта.

// proxy - реалізований у js натівно.  (new Proxy)



// приклад реалізації proxy:

// обект, точніше функція, для якої ми сторимо proxy обект(обгортку).
function networkFetch(url) {
    return `${url} - Ответ с сервера`;
}

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
    apply(target,thisArg,args) {
        const url = args[0];
        if (cache.has(url)) {
            return `${url} - Ответ из кеша`;
        } else {
            cache.add(url);
            return Reflect.apply(target,thisArg,args);
        }
    }
});

console.log(proxiedFetch('angular.io'));
console.log(proxiedFetch('react.io'));
console.log(proxiedFetch('angular.io'));





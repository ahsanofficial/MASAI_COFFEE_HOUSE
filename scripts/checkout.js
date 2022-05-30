document.getElementById('confirm').addEventListener('click', function () {
    let url1 = 'Your order is accepted';
    let url2 = 'Your order is being Prepared';
    let url3 = 'Your order is being packed';
    let url4 = 'Your order is out for delivery';
    let url5 = 'Order delivered';

    function print(u) {
        alert(u)
    }

    function Promises(ur) {
        return new Promise(function (resolve, reject) {
            setTimeout(() => {
                alert(ur)
                resolve(ur)
            }, 0);
        })
    }

    async function test() {
        let u1 = await Promises(url1)
        print(u1)
        let u2 = await Promises(url2)
        print(u2)
        let u3 = await Promises(url3)
        print(u3)
        let u4 = await Promises(url4)
        print(u4)
        let u5 = await Promises(url5)
        print(u5)
    }
    test()
})